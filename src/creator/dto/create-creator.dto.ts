import { ValidateNested } from 'class-validator';
import { CreatorModel } from '../entities/creator.entity';
import { Type } from 'class-transformer';

export class CreateCreatorDto {
  @ValidateNested()
  @Type(() => CreatorModel)
  details: CreatorModel;
}
