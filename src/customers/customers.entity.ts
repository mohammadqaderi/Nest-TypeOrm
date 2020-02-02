import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Order } from '../orders/orders.entity';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  customer_id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: number;

  @Column()
  city: string;

  @Column()
  address: number;
  
  @OneToMany(type => Order, order => order.customer)
  orders: Order[];
}
