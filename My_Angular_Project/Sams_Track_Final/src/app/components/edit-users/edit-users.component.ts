
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  username:string=''

  editUsers:any=null;

  constructor(private Route:ActivatedRoute,private UserService:UserService, private router:Router){}

  ngOnInit():void{
 this.username= this.Route.snapshot.paramMap.get('username')??'';

   this.getUser();

  }

  getUser() {
  this.UserService.getUserByUsername(this.username).subscribe(res => {
    this.editUsers = res;

    this.user.patchValue({
      username: this.editUsers.username || '',
      password: this.editUsers.password || '',
      firstName: this.editUsers.firstName || '',
      lastName: this.editUsers.lastName || '',
      email: this.editUsers.email || '',
      role: this.editUsers.role || ''
    });
  });
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

    updateUser(){
      this.UserService.updateUser(this.user.value).subscribe(res=>{
        if(res!=null){
          alert('updated');
          this.router.navigateByUrl('/all-user')
        }else{
          alert("something went wrong");
        }

      })

    }

}
