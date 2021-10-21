import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { type } from 'os';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstName: String

  @Prop()
  lastName: String

  @Prop()
  email: String

  @Prop()
  password: String

  @Prop({type:Object})
  jwtToken: {
    jwtToken:  String 
    createdAt:  Date 
  };
  
}

export const UserSchema = SchemaFactory.createForClass(User);
