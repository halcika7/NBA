import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";

import { environment } from "@env/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem("accessToken")
      ? localStorage.getItem("accessToken")
      : sessionStorage.getItem("accessToken");
    let modifiedReq = req;
    if(!req.url.includes('assets')) {
      modifiedReq = req.clone({
        url: environment.apiURL + req.url,
        headers: req.headers.set("Authorization", "Bearer " + token),
        withCredentials: true
      });
    }
    return next.handle(modifiedReq);
  }
}
