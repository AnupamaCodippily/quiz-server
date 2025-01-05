import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InterviewModule } from './interview/interview.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamsModule } from './exams/exams.module';
import { OpenaiService } from './openai/openai.service';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    InterviewModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'exams',
      entities: [],
      synchronize: true,
    }),
    ExamsModule,
    ConfigModule.forRoot({
      isGlobal: true, // Makes the configuration available globally
      envFilePath: '.env', // Optional: specify the .env file location
    }),
  ],
  controllers: [AppController],
  providers: [AppService, OpenaiService],
}) 
export class AppModule {}