import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/userModel';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

users:Users[]=[]


  constructor(private usersService:UsersService) { }

  getData(){
    this.users = this.usersService.getUsers()
  }
  ngOnInit(): void {
    this.getData()
  }

}
