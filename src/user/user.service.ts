import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userInfo } from 'os';
import { CreateUserDto } from './dto/base-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
    private readonly jwt:JwtService
  ) {}

  

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await new this.model(createUserDto).save();
  }

  generateToken(user){
    let jwtToken = this.jwt.sign({ _id: user._id });
    let tokenDetails = {
      jwtToken: jwtToken,
      createdAt: Date.now(),
    };
    return tokenDetails
  }

  async findAll(): Promise<User[]> {
    return await this.model.find();
  }

  async findByEmail(user):Promise<User>{
      return await this.model.findOne({email:user.email})
  }

}
