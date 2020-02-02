import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Customer } from '../customers/customers.entity';

@Entity('invoices')
export class Invoice {
  @PrimaryGeneratedColumn()
  invoice_id: number;

  @Column({
    length: 50,
  })
  number: string;

  @Column()
  payment_total: number;

  @Column({
    default: Date.now(),
  })
  invoice_date: Date;

  @OneToOne(type => Customer)
  @JoinColumn({
    referencedColumnName: 'customer_id',
  })
  customer: Customer;
}
