
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Customer } from "../customers/customers.entity";

@Entity('orders')
export class Order {

    @PrimaryGeneratedColumn()
    order_id: number;

    @Column()
    status: number;

    @Column()
    price: number;

    @ManyToOne(type => Customer, customer => customer.orders)
    customer: Customer;
}