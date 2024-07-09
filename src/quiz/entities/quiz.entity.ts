import { Quiz } from '../schema/quiz.schema';
import IQuestion from './question';

export class QuizModel extends Quiz {
  id: number;

  title: string;

  creator: string; // username of creator

  questions: IQuestion[];
}
