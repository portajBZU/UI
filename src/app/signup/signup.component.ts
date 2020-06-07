import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {SignUp} from "../../interface/SignUp";
import {LogIn} from "../log-in/log-in.component";
import {LoginService} from "../services/login.service";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpFailed: String;
  simpleForm: FormGroup;
  errors;
  data: SignUp = {name: '', password: '', idStudent: 0, email: '', needPartners: false, details: '', partner: '', partnerId: 0, groupId: null};

  constructor(public fb: FormBuilder, public http: HttpClient, public signupService: LoginService) {
  }

  ngOnInit() {
    this.simpleForm = this.fb.group({
      idStudent: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', Validators.required],
      group: ['', Validators.required],
      password: ['', Validators.required],
      details: ['', Validators.required],
      partner: ['', Validators.required],
      partnerId: ['', Validators.required]
    });
    console.log(this.simpleForm.value);
  }

  onSignin() {
    this.data.name = this.simpleForm.value.name;
    this.data.password = this.simpleForm.value.password;
    this.data.idStudent = this.simpleForm.value.idStudent;
    this.data.email = this.simpleForm.value.email;
    if (this.simpleForm.value.group == 'No') {
      this.data.needPartners = false;
      this.data.details = 'none';
    } else {
      this.data.needPartners = true;
      if (this.simpleForm.value.details == 'alone') {
        this.data.details = 'No Group';
      } else if (this.simpleForm.value.details == 'group-2') {
        this.data.details = 'Group of 2'
        this.data.partner = this.simpleForm.value.partner;
        this.data.partnerId = this.simpleForm.value.partnerId;
      }
    }
    console.log(this.data);
    let error = '';
    this.signupService.signUp(this.data);
    if (this.signupService.loginFailed()) {
      this.errors = this.signupService.errorMsg();
      this.signUpFailed = "hi";
    } else {
      localStorage.setItem('password', this.data.password)
      localStorage.setItem('user', "" + this.data.idStudent)
    }
  }

  showGroup() {
    return this.simpleForm.value.group;
  }

  enterPartner() {
    if (this.simpleForm.value.details == 'group-2')
      return true
    else
      return false
  }


}
