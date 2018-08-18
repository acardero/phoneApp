import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from "ng2-file-upload";
import { FormsModule } from "@angular/forms";


import { PhoneService} from './services/phone.service';
import { EnterDetailsGuardService } from './phone-details/enter-details-guard.service';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { LeaveAddPhoneGuardService } from './add-phone/leave-add-phone-guard.service';
import { ResolveDetailsGuardService } from './phone-details/resolve-details-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailsComponent,
    AddPhoneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [PhoneService, EnterDetailsGuardService, LeaveAddPhoneGuardService, ResolveDetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
