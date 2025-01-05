
import { Question } from 'src/interview/entities/interview.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Exam {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    topics: string[];

    @Column()
    time_limit: number;

    @Column()
    custom_prompt: string;

    @Column()
    questions_list: Question[];

    @Column()
    answers_list: any[]
}
