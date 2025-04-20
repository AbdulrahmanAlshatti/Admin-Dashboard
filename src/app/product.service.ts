import { Injectable } from '@angular/core';
import { Product,PRODUCTS } from '../data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[]

  constructor() { 
    this.products = PRODUCTS
  }

  create(product: Product){
    this.products.push(product);
  }

  Read(id:Number): Product | undefined{
    return this.products.find(x=>x.id == id)
  }

  Update(product: Product){
    let index = this.products.findIndex(x=>x.id == product.id)
    if(index != -1)
      this.products[index] = product;
  }

  Delete(id:Number){
    this.products = this.products.filter(x => x.id != id)
  }




}
