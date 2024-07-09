import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Quiz } from './schema/quiz.schema';
import { Model } from 'mongoose';

@Injectable()
export class QuizService {

  constructor(@InjectModel(Quiz.name) private readonly quizModel: Model<Quiz>) {}

  create(createQuizDto: CreateQuizDto) {
    return this.quizModel.create(createQuizDto.details);
  }

  findAll() {
    return `This action returns all quiz`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quiz`;
  }

  update(id: number, updateQuizDto: UpdateQuizDto) {
    return `This action updates a #${id} quiz`;
  }

  remove(id: number) {
    return `This action removes a #${id} quiz`;
  }
}
