export type Question = {
    isMCQ: boolean,
    question: string
}

export interface ExamAnswers {
    applicantName: string;
    questions: Question[];
    answers: string[];
}