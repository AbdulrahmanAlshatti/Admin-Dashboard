import { Component, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { User, userSchema} from '../data/users';
import { Product, productSchema} from '../data/products';
import { RowPipe } from './row.pipe';
import { PopupComponent } from "./popup/popup.component";
import { ProductService } from './product.service';
import { GenericService } from './generic.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatTableModule, RowPipe, PopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  activeService: GenericService;

  productSchema = productSchema;
  userSchema = userSchema
  title = 'Admin-Dashboard';
  showPopup = false;

  // page:number= 0

  productsClicked() {
    this.activeService = this.productService
  }

  usersClicked() {
    this.activeService = this.userService
  }
  

  constructor(
    public userService: UserService,
    public productService: ProductService    
  ){
    this.activeService = this.userService
  }

  getKeys() : string[] {
    return this.activeService.getKeys();
  }



  productKeys(){    
    return Object.keys(this.productService.products[0])
  }

  dataSubmitted(data: any) {
    this.activeService.create(data)
  }
    
  togglePopup() {    
    this.showPopup = !this.showPopup;
  }

  closePopup() {
    this.showPopup = false;
  }
  
  popupClosed() {
    this.closePopup()
  }

  getData(): any {
    return this.activeService.getData()
  }

  getSchema(): any {
    return this.activeService.getSchema();
  }
  

}
