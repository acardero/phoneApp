import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddPhoneComponent } from './add-phone.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveAddPhoneGuardService implements CanDeactivate<AddPhoneComponent> {

  canDeactivate(component: AddPhoneComponent)
    : Observable<boolean> | Promise<boolean> | boolean {

    return component.isFormClean();
  }
}
