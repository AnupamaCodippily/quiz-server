import { Injectable } from '@nestjs/common';
import { ExamAnswers } from './dto/exam-answers.dto';
import { ExamResultsDto } from './dto/exam-results.dto';
import { OpenaiService } from 'src/openai/openai.service';

function PROMPT_EVALUATE_AGAINST_ANSWER(question: string, answerGiven: string, expectedAnswer: string): string {

    let prompt = `A candidate for the position of senior software engineer was asked the below question. Next is the expected answer. Finally the candidate's answer. 
    Evaluate on a scale of 0 to 10, how well the candidate''s answer below scores as a senior engineer: \n Provide ONLY this number score in the response.`

    prompt += `\nQUESTION = ${question}:\n`;

    prompt += `\n EXPECTED ANSWER =  ${answerGiven}:\n`;

    prompt += `\n CANDIDATE ANSWER =  ${answerGiven}:\n`;

    return prompt;
}

@Injectable()
export class ExamsGradingService {

    constructor(private readonly openAIService: OpenaiService) { }

    async evaluateAnswer(question, answer, expected?) {
        const prompt = PROMPT_EVALUATE_AGAINST_ANSWER(question, answer, expected)
        return this.openAIService.evaluateQuestion(prompt);
    }

    async gradeExam(examAnswers: ExamAnswers): Promise<ExamResultsDto> {
        const { answers, applicantName, questions } = examAnswers;

        const results: ExamResultsDto = {
            applicantName,
            examId: "1",
            results: {
                grade: {
                    percentage: 0,
                },
                qna : []
            }
        }

        let total = 0

        const qna = await Promise.all(questions.map(
            async (item, index) => {
                const score = await this.evaluateAnswer(item.question, answers[index], "");

                total += score;

                return Object.freeze({
                    correctness: score,
                    expectedAnswer: "",
                    question: item.question
                })
            }
        ))

        const perc = (total / (10 * answers.length) ) * 100

        results.results.grade.percentage = perc;
        results.results.qna = qna;

        return results;
    }
}
