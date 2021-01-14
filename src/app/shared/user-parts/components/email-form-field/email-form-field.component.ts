import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-email-form-field',
  templateUrl: './email-form-field.component.html',
  styleUrls: ['./email-form-field.component.scss']
})
export class EmailFormFieldComponent implements OnInit {

  @Input() parentFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  get emailControl() {
    return this.parentFormGroup.get('email');
  }

}
