import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController} from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import {JwtModule} from "@nestjs/jwt"

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({ secret: 'hard!to-guess_secret' })
  ],
})
export class UserModule {}
