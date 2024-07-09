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
      isGlobal: true,
      envFilePath: '.env',
    }), // TODO: check if this is ok when deployed to prod
    MongooseModule.forRoot(process.env['MONGO_URL']),
    QuizModule,
    CreatorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
