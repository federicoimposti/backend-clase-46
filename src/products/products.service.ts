import { Injectable } from '@nestjs/common';
import { Products } from '../interfaces/products/products.interface';

@Injectable()
export class ProductsService {
    private products: Products[] = [];

    create(product: Products) {
        this.products.push(product)
    }

    findAll(): Products[] {
        return this.products;
    }

    deleteById(id: string) {
        const items = this.findAll();

        if(!items) return;

        const itemsFiltered = items.filter(item => item.id !== id);
        this.products = itemsFiltered;
    }

    update(id: string, product: Products) {
        const { title, price, thumbnail } = product;
        const itemId = id;
        const items = this.findAll();
        const item:any = items.filter(item => item?.id === id);

        console.log(item);
    
        if(item[0]?.id) {
            items.forEach(item => {
                const idProduct = item.id;
                if(itemId === idProduct){
                    item.title = title;
                    item.price = price;
                    item.thumbnail = thumbnail;
                    console.log('entra')
                }
            });

        this.products = items;
        } 
    }
}
