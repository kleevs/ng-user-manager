import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxService } from 'src/service/ajax.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  login: string;
  password: string;
  
  constructor(private ajaxService: AjaxService, private router: Router) {
  }

  signin() {
    this.ajaxService.signin(this.login, this.password).then(_ => {
      this.router.navigate(["/"]);
    });
  }
}
