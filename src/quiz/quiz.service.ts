import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Quiz } from './schema/quiz.schema';
import { Model } from 'mongoose';

@Injectable()
export class QuizService {
  constructor(
    @InjectModel(Quiz.name) private readonly quizModel: Model<Quiz>,
  ) {}

  create(createQuizDto: CreateQuizDto) {
    return this.quizModel.create(createQuizDto.details);
  }

  findAll() {
    return this.quizModel.find();
  }

  findOne(id: string) {
    return this.quizModel.findById(id);
  }

  update(id: string, updateQuizDto: UpdateQuizDto) {
    return this.quizModel.findByIdAndUpdate(id, updateQuizDto.details);
  }

  remove(_id: string) {
    return this.quizModel.deleteOne({ _id });
  }
}
