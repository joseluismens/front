import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler,HttpRequest, HttpEvent } from "@angular/common/http";
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  
  constructor(private authService:AuthService) { }
  
  intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
    const token = localStorage.getItem('auth-token');
    if(!!token){
      req=req.clone({
        setHeaders:{
          'Accept'       : 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

    }
   
    return next.handle(req);

  }

}
