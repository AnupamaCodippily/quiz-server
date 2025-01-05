export type Question = {
    imageUri?: string,
    isMCQ: boolean,
    question: string
}

export type Exam = {
    questions : Question[]
}


export class Interview {
    id: number;
    exams: Exam[]
}
