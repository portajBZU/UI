import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Templates} from '../interface/Templates';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http : HttpClient) {}
  search (key: String){
    return this.http.get<any>(`http://localhost:3500/search/${key}`).subscribe(res =>
    console.log(res));
  }

}
