import { Injectable } from '@angular/core';
import { Users } from '../interfaces/userModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users:Users[] = [
    {name:'omar'},
    {name:'samy'},
    {name:'samar'}
  ]

  getUsers(){
    return this.users
  }
  




  constructor() { }
}
