import { Injectable } from '@nestjs/common';
import { CreateInterviewDto } from './dto/create-interview.dto';
import { UpdateInterviewDto } from './dto/update-interview.dto';

@Injectable()
export class InterviewService {
  create(createInterviewDto: CreateInterviewDto) {
    return 'This action adds a new interview';
  }

  findAll() {
    return ;
  }

  findOne(id: number) {
    return `This action returns a #${id} interview`;
  }

  async search(term: string) {

  }

  update(id: number, updateInterviewDto: UpdateInterviewDto) {
    return `This action updates a #${id} interview`;
  }

  remove(id: number) {
    return `This action removes a #${id} interview`;
  }
}
