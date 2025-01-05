import { Injectable } from '@nestjs/common';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Exam } from 'src/interview/entities/interview.entity';

@Injectable()
export class ExamsService {
  create(createExamDto: CreateExamDto) {
    return 'This action adds a new exam';
  }

  findAll() {
    return `This action returns all exams`;
  }

  async findOne(id: number): Promise<Exam> {
    return {
      questions: [{
        isMCQ: false,
        question: "What is React? What are its strengths?"
      },
      {
        isMCQ: false,
        question: "Describe the react component lifecycle"
      }]
    };
  }

  update(id: number, updateExamDto: UpdateExamDto) {
    return `This action updates a #${id} exam`;
  }

  remove(id: number) {
    return `This action removes a #${id} exam`;
  }
}
