import { Component, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { User, userSchema} from '../data/users';
import { RowPipe } from './row.pipe';
import { PopupComponent } from "./popup/popup.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatTableModule, RowPipe, PopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  userSchema = userSchema
  title = 'Admin-Dashboard';
  showPopup = false;

  userService: UserService;


  constructor(userService: UserService){
    this.userService = userService;
  }

  userKeys(){    
    return Object.keys(this.userService.users[0])
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  closePopup() {
    this.showPopup = false;
  }

  popupClosed() {
    this.showPopup = false
    console.log(this.userService.users)
  }

}
