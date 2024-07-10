import { IsEmail, IsNotEmpty } from 'class-validator';
import { Creator } from '../schemas/creator.schema';

export class CreatorModel extends Creator {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  username: string;
}
