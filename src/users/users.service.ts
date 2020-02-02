import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }
  async getUser(id: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: [{ _id: id }],
    });
  }
  async createUser(user: User): Promise<User>  {
    if (user !== null) {
      const createdUser = await this.usersRepository.save(user);
      return createdUser;
    }
  }
}
