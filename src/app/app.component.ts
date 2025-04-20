import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { User } from '../data/users';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Admin-Dashboard';

  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'status'];
  users: User[];
  constructor(userService: UserService){
    this.users =userService.users

    this.users[3].email
    
    this.users[3]['email']
  }

}
