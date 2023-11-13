import { CreateUserDto } from './dtos/createUser.dto';
import { Injectable } from '@nestjs/common';
import { User } from './model/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUserById(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  public async updateUser(
    id: number,
    createUserDto: CreateUserDto,
  ): Promise<CreateUserDto> {
    const user = await this.userRepository.findOneBy({ id });

    if (createUserDto.name) user.name = createUserDto.name;

    if (createUserDto.name) user.email = createUserDto.email;

    if (createUserDto.name) user.phone = createUserDto.phone;

    if (createUserDto.name) user.cpf = createUserDto.cpf;

    if (createUserDto.name) user.password = createUserDto.password;

    return createUserDto;
  }

  public async createUser(
    createUserDto: CreateUserDto,
  ): Promise<CreateUserDto> {
    const user = new User();
    user.setName(createUserDto.name);
    user.setEmail(createUserDto.email);
    user.setPhone(createUserDto.phone);
    user.setCpf(createUserDto.cpf);
    user.setPassword(createUserDto.password);
    this.userRepository.save(user);

    console.log({ user });
    return createUserDto;
  }

  public async deleteUser(id: number) {
    this.userRepository.delete({ id });
  }
}
