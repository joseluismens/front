import { Injectable } from '@angular/core';
import { Auth } from '../global';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {IUser } from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string;

  constructor(private http:HttpClient,private router:Router) {
    this.url=Auth.url;
   }

   signup(user:any):Observable<any>{
      return this.http.post(this.url+'signup',user);
   }
   signin(user:any):Observable<any>{
    let params=JSON.stringify(user)
     return this.http.post(this.url+'signin',user);
   }
   loggedIn():Boolean{
    if(typeof(localStorage.getItem("auth-token"))=='undefined'){
      return true;
    }else{
      return false;
    }
        
    
   }
   getToken():String{
     return localStorage.getItem('auth-token');
   }
   logout():void{
     localStorage.removeItem('auth-token');
     localStorage.removeItem('user');
     location.reload();
     this.router.navigate(['/signin']);

   }
   getUserID(){
     let user: IUser=JSON.parse(localStorage.getItem('user'));

     return user._id;
   }
   getUserRole(){
    let user: IUser=JSON.parse(localStorage.getItem('user'));

    return user.userRole;


  }
   
   
}
