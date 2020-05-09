import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Customer {
  name: string;
  age: string;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

customer: Customer = {name: '', age: ''};
  constructor(public http: HttpClient) { }

  ngOnInit() {
    document.body.classList.add('background-img');
  }

  getCustomers() {
    return this.http.get('http://localhost:4000/customer').subscribe(
      res => {
      console.log('GET Request is successful ', res);
      },
      error  => {
      console.log('Error', error);
      });

  }
  getCars() {
    return this.http.get('http://localhost:4000/car').subscribe(
      res => {
      console.log('GET Request is successful ', res);
      },
      error  => {
      console.log('Error', error);
      });

  }
}
