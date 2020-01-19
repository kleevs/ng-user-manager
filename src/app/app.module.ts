import 'jquery';
import 'bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './component/app.component';
import { DetailComponent } from './component/detail.component';
import { VibrateDirective } from './directive/vibrate.directive';
import { ListComponent } from './component/list.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent,
    VibrateDirective
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ListComponent },
      { path: 'users', component: DetailComponent },
      { path: 'users/:id', component: DetailComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
