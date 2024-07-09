import { Creator } from "src/creator/entities/creator.entity";
import { Question } from "./question";

export class Quiz {

    id: number;

    creator: Creator;

    questions: Question[];

    answers: number[];
}
