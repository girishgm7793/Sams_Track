import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from '../../services/user.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"],
})
export class AddUserComponent {


  constructor(private UserService:UserService, private router:Router){

  }


  user = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl("", [Validators.required, Validators.email]),
    role: new FormControl("", [Validators.required]),
  });

  addUser(){
  //   this.UserService.addUser(this.user.value).subscribe({
  //   next: (res) => {
  //     alert('Registration successful');
  //     this.router.navigate(['/all-users']); // ✅ Correct object
  //   },
  //   error: (err) => {
  //     alert('Registration failed');
  //     console.error(err);
  //   }
  // });
   this.UserService.addUser(this.user.value).subscribe(res=>{
    alert(res)
   })



  }


}








