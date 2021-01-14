import { Component, OnInit } from '@angular/core';
import {User} from '../../../core/entities/user';
import {AuthService} from '../../../core/services/auth.service';
import {Observable} from 'rxjs';
import {MatchService} from '../../../core/services/match.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  matchs$: Observable<User[]>;

  constructor(
    private matchService: MatchService
  ) {
    this.matchs$ = matchService.get();
  }

  ngOnInit() {
  }

  get user(): User {
    return AuthService.user;
  }


}
