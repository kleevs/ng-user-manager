import { Component, Output, EventEmitter } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-modal-delete-user',
  templateUrl: './delete.user.component.html'
})
export class DeleteUserComponent {
  @Output()
  callback = new EventEmitter<void>();

  constructor(private appComponent: AppComponent) {}

  confirm() {
    this.callback.emit();
    this.cancel();
  }

  cancel() {
    this.appComponent.modal = undefined;
  }
}
