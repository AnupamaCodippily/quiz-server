import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CreatorDocument = HydratedDocument<Creator>;

@Schema()
export class Creator {
  @Prop()
  username: string;

  @Prop()
  email: string;
}

export const CreatorSchema = SchemaFactory.createForClass(Creator);
