import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
export interface LogIn {
  password: string;
  idStudent: number;
}
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
user: LogIn = {idStudent: 0, password:''};
simpleForm: FormGroup;
loginFailed: String;

constructor(public fb: FormBuilder, private loginService: LoginService) {
  this.simpleForm = fb.group({
    idStudent: ['', [Validators.required]],
    password: ['', Validators.required],
  });
}
login() {
    this.user.password =  this.simpleForm.value.password;
    this.user.idStudent =  this.simpleForm.value.idStudent;
    this.loginService.logIn(this.user);
    if (this.loginService.loginFailed()) {
      this.loginFailed = 'Wrong Student ID or Password';
    }
}

}
