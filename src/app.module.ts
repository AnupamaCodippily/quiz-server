import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';
import { CreatorModule } from './creator/creator.module';

@Module({
  imports: [QuizModule, CreatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
