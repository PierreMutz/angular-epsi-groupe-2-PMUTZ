import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {User} from '../../../core/entities/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  userForm = this.fb.group({
    first_name: [null, [Validators.required]],
    last_name: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    password: ['password', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit() {
  }

  signup() {
    const newUser = new User(this.userForm.getRawValue());
    this.authService.signup(newUser).subscribe(
      () => {
        // inscription réussie !
        this.authService.signin(newUser.email, newUser.password).subscribe(
          () => {
            this.router.navigate(['dash/home']);
          }, () => {
          }
        );

      }, (err) => {
        // afficher ici les erreurs de type duplicata
      }
    );

  }

}
