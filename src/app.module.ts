import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';
import { CreatorModule } from './creator/creator.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/quizdb'),
    QuizModule, CreatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
