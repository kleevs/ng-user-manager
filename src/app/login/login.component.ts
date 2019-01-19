import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  login: string;
  password: string;
  
  constructor(private userService: UserService, private router: Router) {
  }

  signin() {
    this.userService.signin(this.login, this.password).then(_ => {
      this.router.navigate(["/"]);
    });
  }
}
