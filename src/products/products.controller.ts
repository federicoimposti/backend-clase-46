import { Body, Controller, Delete, Get, Post, Param, Put } from '@nestjs/common';
import { Products } from '../interfaces/products/products.interface';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { UpdateProductDto } from 'src/dto/update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Post()
    async create(@Body() createProductDto: CreateProductDto) {
        this.productsService.create(createProductDto);
    }

    @Get()
    async findAll(): Promise<Products[]> {
        return this.productsService.findAll();
    }

    @Delete(':id')
    async deleteById(@Param('id') id: string) {
        return this.productsService.deleteById(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() UpdateProductDto: UpdateProductDto) {
        return this.productsService.update(id, UpdateProductDto);
  }
}
