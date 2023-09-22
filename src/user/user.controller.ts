import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

  private userService: UserService;

  constructor(userService: UserService){
    this.userService = userService;
  }

  @Get()
  async getAllUsers() {
    return JSON.stringify({ test: 'abc' });
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
