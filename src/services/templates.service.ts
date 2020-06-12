import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Announcement} from '../interface/announcement';
import {Templates} from '../interface/Templates';
import {SignUp} from "../interface/SignUp";

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor(private http : HttpClient) { }

  addTemplates(data){
    return this.http.post<Templates>('http://localhost:3500/templates', data).subscribe(res => {
      console.log(data);
    })
  }
  getTemplates(){
    return this.http.get<Templates>('http://localhost:3500/templates');
  }
}
