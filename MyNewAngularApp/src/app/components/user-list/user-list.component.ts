import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { Router } from '@angular/router' ;
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : Observable<User[]>;
  constructor(private userService : UserService, 
    private router : Router){}

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.users = this.userService.getUsersList();
  }
  deleteUser(id : number){
    this.userService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)); 
  }
  userDetails(id : number){    
    this.router.navigate(['details',id]);   
  }
  updateUser(id : number){
    this.router.navigate(['update',id]);
  }
}
