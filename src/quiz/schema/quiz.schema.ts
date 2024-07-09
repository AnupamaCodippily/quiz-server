import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import Question from '../entities/question';

export type QuizDocument = HydratedDocument<Quiz>;

@Schema()
export class Quiz {
  @Prop()
  title: string;

  @Prop()
  creator: string; // creator username

  @Prop()
  questions: Question[];
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);