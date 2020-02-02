import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ length: 50 })
  name: string;

  @Column()
  email: string;
  
  @Column({length: 2})
  age: string;

  @Column()
  phone: number;
}
