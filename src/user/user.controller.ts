import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/base-user.dto';
import {LoginUserDto} from "./dto/login-user.dto"
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Post()
  async create(@Body() CreateUserDto: CreateUserDto) {
    return await this.service.createUser(CreateUserDto);
  }
  @Post('login')
  async login(@Body() LoginUserDto: LoginUserDto) {
    let user = await this.service.findByEmail(LoginUserDto)
    if(user){
        
        return {data:user,status:400,error:null}
    }
    else{
        return {data:null,status:400,error:"user not found"}
    }

  }

}
