import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export interface SignUp {
  password: string;
  name: string;
  idStudent: number;
}
export interface LogIn {
  password: string;
  studentID: number;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  simpleForm: FormGroup;
  data: SignUp = {name: '', password: '', idStudent: 0};
  loginUser: LogIn = {studentID: 0, password:  ''};
  constructor(public fb: FormBuilder, public http: HttpClient) {

  }

  ngOnInit() {
    this.simpleForm = this.fb.group({
      idStudent: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    console.log(this.simpleForm.value);
  }

  onSignin() {
    this.data.name =  this.simpleForm.value.name;
    this.data.password =  this.simpleForm.value.password;
    this.data.idStudent =  this.simpleForm.value.idStudent;
    console.log(this.data);
    this.postData(this.data);
  }

  postData(data: SignUp) {
    return this.http.post<SignUp>('http://localhost:3500/signup', data).subscribe(
      res => {
      console.log('POST Request is successful ', res);
      },
      error  => {
      console.log('Error', error);
      });
    }


}
