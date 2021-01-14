import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(): Observable<any> {
    return this.httpClient.post(
      `${environment.api}/api/user/matchs`,
      {
        max: 30
      }
    ).pipe(
      map( result => {
        // tslint:disable-next-line:no-string-literal
        return result['data'].map((userData) => userData[0]);
      })
    );
  }

}
