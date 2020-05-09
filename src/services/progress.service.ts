import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Announcement} from '../interface/announcement';
import {Progress} from '../interface/Progress';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  constructor(private http : HttpClient) { }

  addProgress(data){
    return this.http.post<Progress>('http://localhost:3500/progress', data).subscribe(res => {
      console.log(data);
    })
  }
}
