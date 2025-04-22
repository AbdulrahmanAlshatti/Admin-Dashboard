import { Injectable } from '@angular/core';
import { User, USERS } from '../data/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]

  constructor() { 
    this.users = USERS
  }

  create(user: User){
    this.users = [...this.users, user];
    // this.users.push(user);
  }

  Read(id:Number): User | undefined{
    return this.users.find(x=>x.id == id)
  }

  Update(user: User){
    let index = this.users.findIndex(x=>x.id == user.id)
    if(index != -1)
      this.users[index] = user;
  }

  Delete(id:Number){
    this.users = this.users.filter(x => x.id != id)
  }


}


