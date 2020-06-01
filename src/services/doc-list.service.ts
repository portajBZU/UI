import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Announcement} from '../interface/announcement';
import {DocList} from '../interface/DocList';

@Injectable({
  providedIn: 'root'
})
export class DocListService {

  constructor(private http : HttpClient) { }

  addDocList(data){
    return this.http.post<DocList>('http://localhost:3500/list', data).subscribe(res => {
      console.log(data);
    })
  }
  getDocList() {
    return this.http.get<DocList>('http://localhost:3500/list');
  }
}
