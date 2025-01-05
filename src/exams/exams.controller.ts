import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { ExamAnswers } from './dto/exam-answers.dto';
import { ExamResultsDto } from './dto/exam-results.dto';
import { ExamsGradingService } from './exam-grading.service';

@Controller('exams')
export class ExamsController {
  constructor(private readonly examsService: ExamsService, 
    private readonly examsGradingService: ExamsGradingService) { }

  @Post()
  create(@Body() createExamDto: CreateExamDto) {
    return this.examsService.create(createExamDto);
  }

  @Get()
  findAll() {
    return this.examsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examsService.findOne(+id);
  }

  @Post(':id/results')
  async getResults(@Param('id') id: number, @Body() examAnswersDto: ExamAnswers): Promise<ExamResultsDto> {
    console.log(examAnswersDto)
    return await this.examsGradingService.gradeExam(examAnswersDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExamDto: UpdateExamDto) {
    return this.examsService.update(+id, updateExamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examsService.remove(+id);
  }
}
