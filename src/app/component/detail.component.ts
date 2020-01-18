import { Component } from '@angular/core';
import { DetailPage } from 'src/domain/page/detail';
import { ActivatedRoute } from '@angular/router';
import { AjaxService } from '../service/ajax.service';
import { ToolService } from '../service/tool.service';

@Component({
  selector: 'detail',
  template: `
  <div>
  <h1 class="title">Détail de l'utilisateur</h1> 
  <hr/>
  <div class="container">
      <form class="full-width center"  (submit)="saveUser()">
          <div class="input-group mb-3">
              <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">Nom</span>
              </div>
              <input data-id="lastname" name="lastname" [vibrate]="lastNameError" [ngClass]="{ 'has-error' : lastNameError }" [(ngModel)]="lastName" type="text" class="form-control" placeholder="Lastname" aria-label="Lastname" aria-describedby="basic-addon1">
          </div>

          <div class="input-group mb-3">
              <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">Prénom</span>
              </div>
              <input data-id="firstname" name="firstname" [vibrate]="firstNameError" [ngClass]="{ 'has-error' : firstNameError }" [(ngModel)]="firstName" type="text" class="form-control" placeholder="Firstname" aria-label="Firstname" aria-describedby="basic-addon1">
          </div>

          <div class="input-group mb-3">
              <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">Date de naissance</span>
              </div>
              <input data-id="birthdate" name="birthdate" [vibrate]="birthdateError" [ngClass]="{ 'has-error' : birthdateError }" [(ngModel)]="birthDateStr" type="text" class="form-control" placeholder="Birthdate" aria-label="Birthdate" aria-describedby="basic-addon1">
          </div>

          <div class="input-group mb-3">
              <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">Login</span>
              </div>
              <input data-id="login" name="login" [vibrate]="loginError" [attr.disabled]="id" [ngClass]="{ 'has-error' : loginError }" [(ngModel)]="login" type="text" class="form-control" placeholder="Login" aria-label="Login" aria-describedby="basic-addon1">
          </div>

          <div class="input-group mb-3">
              <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">Mot de passe</span>
              </div>
              <input data-id="password" name="password" [vibrate]="passwordError" [attr.disabled]="id" [ngClass]="{ 'has-error' : passwordError }" [(ngModel)]="password" type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
          </div>

          <div class="input-group mb-3">
              <div class="input-group-prepend">
                  <div class="input-group-text">
                      <input data-id="actif" name="actif" [(ngModel)]="isActif" type="checkbox" aria-label="Checkbox for following text input">
                  </div>
              </div>
              <span  class="form-control">{{ isActif && 'Actif' || 'Inactif'}}</span>
          </div>

          <button data-id="save" class="btn btn-primary full-width attention-hover" data-content="Enregistrer l'utilisateur">Enregistrer</button>
      </form>
  </div>
</div>
  `
})
export class DetailComponent extends DetailPage {
    constructor(ajaxService: AjaxService, private tool: ToolService, route: ActivatedRoute) {
        super(ajaxService, route.snapshot.params.id);
    }

    private _strBirthDate: string = '';
    get birthDateStr() { return this.tool.toDateString(this.birthdate) || this._strBirthDate || ''; }
    set birthDateStr(v) { this.birthdate = this.tool.parseDate(this._strBirthDate = v); }
}
