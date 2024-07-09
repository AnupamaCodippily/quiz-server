import { Injectable } from '@nestjs/common';
import { CreateCreatorDto } from './dto/create-creator.dto';
import { UpdateCreatorDto } from './dto/update-creator.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Creator } from './schemas/creator.schema';

@Injectable()
export class CreatorService {
  constructor(
    @InjectModel(Creator.name) private readonly creatorModel: Model<Creator>,
  ) {}

  create(createCreatorDto: CreateCreatorDto): Promise<Creator> {
    // TODO: validation
    return this.creatorModel.create(createCreatorDto.details);
  }

  findAll() {
    return this.creatorModel.find();
  }

  findOne(id: string) {
    return this.creatorModel.findById(id);
  }

  update(id: string, updateCreatorDto: UpdateCreatorDto) {
    return this.creatorModel.findByIdAndUpdate(id, updateCreatorDto);
  }

  remove(id: string) {
    return this.creatorModel.deleteOne({ _id: id });
  }
}
