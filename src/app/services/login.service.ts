import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http' ;
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public token: any;

  constructor(private http: HttpClient, private router: Router) { }

  logIn(user) {
    return this.http.post('http://localhost:3500/login', user).subscribe(res => {
      if (res) {
        this.router.navigate(['/']);
        this.getToken(res);
      }
    }, error => {
        this.loginFailed();
    });
  }
  loginFailed() {
    return true;
  }
  getToken(token: any) {
    console.log(token);
    this.token = token;
    this.getUser();
  }
  getUser() {
    const headerDict = {
      'Content-Type': 'application/json; charset=utf-8',
      token: this.token
    };
    const requestOptions = {headers: new HttpHeaders(headerDict)};
    console.log(requestOptions)
    return this.http.get(`http://localhost:3500/login/user` , requestOptions).subscribe(res => {
      console.log(res);
    });
  }
}
