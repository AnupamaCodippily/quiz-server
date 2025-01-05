type qna = {
    question: string,
    expectedAnswer: string,
    correctness: number
}

export interface ExamResultsDto {
    examId: string,
    applicantName: string,
    results: {
        grade: {
            percentage: number
        }
        qna: qna[]
    }
}