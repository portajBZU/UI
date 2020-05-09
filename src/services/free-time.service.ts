import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Announcement} from '../interface/announcement';
import {Freetime} from '../interface/freeTime';

@Injectable({
  providedIn: 'root'
})
export class FreeTimeService {

  constructor(private http: HttpClient) {
  }

  addFreeTime(data) {
    return this.http.post<Freetime>('http://localhost:3500/freeTime', data).subscribe(res => {
      console.log(data);
    })
  }
}
