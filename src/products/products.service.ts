import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.productsRepository.find();
  }

  async getProduct(productId: number): Promise<Product> {
    return await this.productsRepository.findOne(productId);
  }
  async createProduct(product: Product): Promise<Product> {
    const createdProduct = await this.productsRepository.save(product);
    return createdProduct;
  }
}
