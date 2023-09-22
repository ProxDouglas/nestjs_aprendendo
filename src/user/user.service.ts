import { CreateUserDto } from './dtos/createUser.dto';
import { Injectable } from '@nestjs/common';
import { User } from './model/user.model';

@Injectable()
export class UserService {
  private users: User[] = [];

  public async createUser(
    createUserDto: CreateUserDto,
  ): Promise<CreateUserDto> {

    const user = new User();
    user.setId(this.users.length + 1);
    user.setName(createUserDto.name);
    user.setEmail(createUserDto.email);
    user.setPhone(createUserDto.phone);
    user.setCpf(createUserDto.cpf);
    user.setPassword(createUserDto.password);
    this.users.push(user);

    console.log({user});
    return createUserDto;
  }
}
