import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {SearchService} from "../../../services/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  key;
  simpleForm: FormGroup;
  constructor(public http: HttpClient,public fb: FormBuilder, private searchService: SearchService) {
    this.simpleForm = fb.group({
      search: ['', Validators.required],
    });
   }
  ngOnInit() {
  }

  search() {
    this.key= this.simpleForm.value.search;
    let reports = this.searchService.search(this.key)
    console.log(reports)
 //   return this.http.get('http://localhost:3500/search/'+ this.key).subscribe(res =>
    //console.log(res));
  }
}
