import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('products')
export class Product {

    @PrimaryGeneratedColumn()
    product_id: number;

    @Column()
    name: string;

    @Column()
    quantity: number;

    @Column()
    price: number;
}