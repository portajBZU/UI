import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http' ;
import { Router } from '@angular/router';
import {SignUp} from "../../interface/SignUp";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public token: any;
  public msg = '';

  constructor(private http: HttpClient, private router: Router) { }

  logIn(user) {
    return this.http.post('http://localhost:3500/login', user).subscribe(res => {
      if (res) {
        this.router.navigate(['/home']);
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

  signUp(data: SignUp) {
    return this.http.post<SignUp>('http://localhost:3500/signup', data).subscribe(
      res => {
        if(res) {
          this.router.navigate(['/']);
          console.log('POST Request is successful ', res);
        }
      },
      error  => {
        this.loginFailed();
        this.msg = error.error.errors;
        console.log( error.error.errors)
        this.errorMsg();

      });
  }

  errorMsg() {
    return this.msg;
  }
}
