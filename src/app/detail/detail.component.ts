import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/service/user.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  user: User = new User();
  hasError = {
    lastName: false,
    firstName: false,
    birthDate: false,
    login: false,
    password: false
  };
  constructor(private userService: UserService, activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.paramMap.subscribe(params => {
      var id = parseInt(params.get("id"));
      id && userService.getUser(id).then((_: any) => {
        var user = new User();
        user.id = _.id;
        user.lastName = _.lastName;
        user.firstName = _.firstName;
        user.birthDate = _.birthDate;
        user.login = _.email;
        user.password = "**********";
        user.isActif = _.isActive;
        this.user = user;
      });
    });
  }

  save(){
    this.hasError = {
      lastName: false,
      firstName: false,
      birthDate: false,
      login: false,
      password: false
    };
    this.userService.saveUser(this.user)
      .then(_ => this.router.navigate(["/"]))
      .catch((ctx: { error: {errors: {code: number}[] }}) => {
        var exc = ctx.error;
        this.hasError.login = exc.errors.find(_ => _.code == 10001) && true || false;
        this.hasError.password = exc.errors.find(_ => _.code == 10002) && true || false;
        this.hasError.lastName = exc.errors.find(_ => _.code == 10003) && true || false;
        this.hasError.firstName = exc.errors.find(_ => _.code == 10004) && true || false;
        this.hasError.birthDate = exc.errors.find(_ => _.code == 10005) && true || false;
      });
  }
}
