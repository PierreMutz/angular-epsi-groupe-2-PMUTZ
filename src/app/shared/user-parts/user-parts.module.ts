import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailFormFieldComponent } from './components/email-form-field/email-form-field.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { PasswordFormFieldComponent } from './components/password-form-field/password-form-field.component';
import { FirstnameFormFieldComponent } from './components/firstname-form-field/firstname-form-field.component';
import { LastnameFormFieldComponent } from './components/lastname-form-field/lastname-form-field.component';



@NgModule({
  declarations: [
    EmailFormFieldComponent,
    PasswordFormFieldComponent,
    FirstnameFormFieldComponent,
    LastnameFormFieldComponent
  ],
  exports: [
    EmailFormFieldComponent,
    PasswordFormFieldComponent,
    FirstnameFormFieldComponent,
    LastnameFormFieldComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class UserPartsModule { }
