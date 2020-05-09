import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  key;
  simpleForm: FormGroup;
  constructor(public http: HttpClient,public fb: FormBuilder,) {
    this.simpleForm = fb.group({
      search: ['', Validators.required],
    });
   }
  ngOnInit() {
  }

  search() {
    this.key= this.simpleForm.value.search;
    return this.http.get('http://localhost:3500/search/'+ this.key).subscribe(res => 
    console.log(res));
  }
}
