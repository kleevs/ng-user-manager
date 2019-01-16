import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AjaxService } from 'src/service/ajax.service';
import { User } from 'src/model/user';

declare let $: any;

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
  constructor(private ajaxService: AjaxService, activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe(params => {
      var id = parseInt(params.get("id"));
      id && ajaxService.getUser(id).then((_: any) => {
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
    this.ajaxService.saveUser(this.user)
      .then(_ => location.href= $("base").attr("href"))
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
