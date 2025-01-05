export type Question = {
    topics: string[],
    question: string
}

export type Exam = {
    questions : Question[]
}