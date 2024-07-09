import { Quiz } from "../schema/quiz.schema";
import IQuestion from "./question";
export declare class QuizModel extends Quiz {
    id: number;
    title: string;
    creator: string;
    questions: IQuestion[];
}
