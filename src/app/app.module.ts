import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { DeleteUserComponent } from './modal/delete.user/delete.user.component';
import { VibrateDirective } from 'src/directive/vibrate.directive';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'detail', component: DetailComponent },
  { path: '', component: ListComponent },
  { path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    LoginComponent,
    DeleteUserComponent,
    VibrateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
