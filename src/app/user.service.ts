import { Injectable } from '@angular/core';
import { User, USERS, userSchema } from '../data/users';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService {
  users: User[]

  constructor() { 
    super()
    this.users = USERS
  }

  override create(user: User){
    this.users = [...this.users, user];
    console.log(this.users)
  }

  override read(id:Number): User | undefined{
    return this.users.find(x=>x.id == id)
  }

  override update(user: User){
    let index = this.users.findIndex(x=>x.id == user.id)
    if(index != -1)
      this.users[index] = user;
  }

  override delete(id:Number){
    this.users = this.users.filter(x => x.id != id)
  }

  override getData(): any[] { 
    return this.users
  }

  override getSchema(): any {
    return userSchema
  }

  override getKeys() {
    return Object.keys(this.users[0])
  }

}


