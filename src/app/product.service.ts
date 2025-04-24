import { Injectable } from '@angular/core';
import { Product,PRODUCTS, productSchema } from '../data/products';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends GenericService {
  products: Product[]

  constructor() { 
    super()
    this.products = PRODUCTS
  }
  
  override create(product: Product){
    this.products = [...this.products, product];
    console.log(this.products)
  }

  override read(id:Number): Product | undefined{
    return this.products.find(x=>x.id == id)
  }

  override update(product: Product){
    let index = this.products.findIndex(x=>x.id == product.id)
    if(index != -1)
      this.products[index] = product;
  }

  override delete(id:Number){
    this.products = this.products.filter(x => x.id != id)
  }

  
  override getData(): any[] { 
    return this.products
  }

  override getSchema(): any {
    return productSchema
  }

  override getKeys() {
    return Object.keys(this.products[0])
  }

  

}
