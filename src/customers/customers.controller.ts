import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Customer } from './customers.entity';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}
  @Get()
  findAll(): Promise<Customer[]> {
    return this.customerService.getAllCustomers();
  }

  @Get(':customer_id')
  findOne(@Param('customer_id') id: number): Promise<Customer> {
    return this.customerService.getCustomer(id);
  }

  @Post()
  newCustomer(@Body() cBody: Customer): Promise<Customer> {
    return this.customerService.createCustomer(cBody);
  }
}
