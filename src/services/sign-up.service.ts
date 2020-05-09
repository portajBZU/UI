import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Announcement} from '../interface/announcement';
import {SignUp} from '../interface/SignUp';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http : HttpClient) { }

  addSignUp(data){
    return this.http.post<SignUp>('http://localhost:3500/signup', data).subscribe(res => {
      console.log(data);
    })
  }
}
