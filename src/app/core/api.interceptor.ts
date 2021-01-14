import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SessionService} from './services/session.service';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor {

  constructor(private sessionService: SessionService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const update: { headers?: HttpHeaders } = {};

    const token = this.sessionService.getToken();

    if (token) {
      update.headers = new HttpHeaders(
        {
          Authorization: `Bearer ${token}`, // methode d'authentification en JWT
        }
      );
    }

    // on clone la requête avec les mises à jours qu'on lui donne
    const clonedRequest: HttpRequest<any> = req.clone(update);

    return next.handle(clonedRequest); // on passe la main au prochain interceptor s'il y en a un

  }
}


















