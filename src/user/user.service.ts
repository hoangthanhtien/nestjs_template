import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import User from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) { }
  async create(CreateUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(CreateUserDto)
    await this.userRepository.save(CreateUserDto);
    return newUser;
  }

  async findAll() {
    const allUsers = await this.userRepository.find()
    return allUsers;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
