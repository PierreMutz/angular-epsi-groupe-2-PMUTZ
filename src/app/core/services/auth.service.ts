import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { User } from "../entities/user";
import { environment } from "../../../environments/environment";
import { tap } from "rxjs/operators";
import { SessionService } from "./session.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  static user: User | null = null;

  constructor(
    private httpClient: HttpClient,
    private sessionService: SessionService
  ) {}

  static get isSignedIn(): boolean {
    return AuthService.user !== null;
  }

  static get isAdmin(): boolean {
    if (
      AuthService.user !== null &&
      AuthService.user.roles.includes("ROLE_ADMIN")
    ) {
      return AuthService.user.roles.includes("ROLE_ADMIN");
    }
  }

  signin(email: string, password: string): Observable<any> {
    return this.httpClient
      .post(`${environment.api}/api/login_check`, { email, password })
      .pipe(
        tap(response => {
          console.log("token", response.token);
          this.sessionService.setToken(response.token);
        })
      );
  }

  signup(user: User): Observable<any> {
    return this.httpClient.post(`${environment.api}/api/signup`, user);
  }

  me(): Observable<any> {
    return this.httpClient.get(`${environment.api}/api/ping`).pipe(
      tap((user: User) => {
        console.log({ user });
        AuthService.user = user;
      })
    );
  }
}
