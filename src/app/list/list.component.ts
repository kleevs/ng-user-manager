import { Component } from '@angular/core';
import { User } from 'src/model/user';
import { AjaxService } from 'src/service/ajax.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  users: User[] = [];
  
  constructor(private ajaxService: AjaxService, private appComponent: AppComponent) {
    ajaxService.getUsers().then((users: any[]) => {
      ajaxService.userId.then(userId => {
        this.users = users.map(_ => {
          var user = new User();
          user.id = _.id;
          user.lastName = _.lastName;
          user.firstName = _.firstName;
          user.birthDate = _.birthDate;
          user.login = _.email;
          user.password = _.password;
          user.isActif = _.isActive;
          user.isCurrent = _.id === userId;
          return user;
        });
      });
    });
  }

  removeUser(user: User) {
    this.appComponent.modal = ((fn) => {
      return user.isActif && fn || fn() || undefined;
    })(() => {
      this.ajaxService.removeUser(user.id).then(() => {
        this.users = this.users.filter(_ => _ !== user);
      });
    });
  }
}
