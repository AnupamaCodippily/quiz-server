import { Module } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { ExamsController } from './exams.controller';
import { ExamsGradingService } from './exam-grading.service';
import { OpenaiService } from 'src/openai/openai.service';

@Module({
  controllers: [ExamsController],
  providers: [ExamsService, ExamsGradingService, OpenaiService],
})
export class ExamsModule {}
