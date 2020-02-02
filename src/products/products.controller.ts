import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.getAllProducts();
  }

  @Get(':product_id')
  findOne(@Param('product_id') id: number): Promise<Product> {
    return this.productsService.getProduct(id);
  }

  @Post()
  newProduct(@Body() prodBody: Product): Promise<Product> {
    return this.productsService.createProduct(prodBody);
  }
}
