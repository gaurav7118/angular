import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  submitted = false;
  constructor(private userService : UserService,
     private router : Router) { }

  ngOnInit() {
  }

  newUser(): void{
    this.submitted = false;
    this.user = new User();
  }
  save(){         
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.gotoList();    
    
  }
  onSubmit(){
    console.log("hsgds")
    this.submitted = true;
    this.save();  
  }
  gotoList(){
    this.router.navigate(['/users']);    
  }
}
