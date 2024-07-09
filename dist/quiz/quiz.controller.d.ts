import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
export declare class QuizController {
    private readonly quizService;
    constructor(quizService: QuizService);
    create(createQuizDto: CreateQuizDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateQuizDto: UpdateQuizDto): string;
    remove(id: string): string;
}
