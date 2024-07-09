import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';
import { CreatorModule } from './creator/creator.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes the ConfigModule globally available
      envFilePath: '.env', // path to your .env file
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/quizdb'),
    QuizModule,
    CreatorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
