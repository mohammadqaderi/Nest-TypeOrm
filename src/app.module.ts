import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { InvoicesModule } from './invoices/invoices.module';
import { ProductsModule } from './products/products.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '633802asdASD',
      database: 'my_nestjs_project',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    UsersModule,
    CustomersModule,
    OrdersModule,
    InvoicesModule,
    ProductsModule,
  ],
  controllers: [
    AppController
  ],
  providers: [AppService],
})
export class AppModule {}
