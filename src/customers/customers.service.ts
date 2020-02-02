import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customers.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customersRepository: Repository<Customer>,
  ) {}

  async getAllCustomers(): Promise<Customer[]> {
    return await this.customersRepository.find();
  }
  async getCustomer(customerId: number): Promise<Customer> {
    return await this.customersRepository.findOne({
      customer_id: customerId,
    });
  }
  async createCustomer(customer: Customer): Promise<Customer> {
    const createdCustomer = this.customersRepository.save(customer);
    return createdCustomer;
  }
}
