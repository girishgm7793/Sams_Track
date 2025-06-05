import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 constructor(private userService: UserService, private router: Router) {}

  loginRequest={
    username:'',
    password:''

  }
  loginUser() {
  this.userService.loginUser(this.loginRequest).subscribe(res => {
    if (res!=null) {
      if (res.role === 'admin') {
        this.router.navigateByUrl('/admin-dashboard');
      } else {
        this.router.navigateByUrl('/faculty-dashboard');
      }
    } else {
      // Optional: handle null or failed response
      console.error('Login failed: null response received.');
    }
  }, error => {
    // Optional: handle error response
    console.error('Login error:', error);
  });
}


  }

