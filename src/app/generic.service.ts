import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class GenericService {
  
  constructor() { }
  
  abstract create(product: any) : void
  abstract read(id:Number): any | undefined
  abstract update(product: any) : void
  abstract delete(id:Number) : void
  
  abstract getData() : any[]
  abstract getSchema(): any;
  abstract getKeys(): string[];  

}
