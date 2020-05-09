import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Announcement} from '../interface/announcement';
import {Group} from '../interface/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) {
  }

  addGroup(data) {
    return this.http.post<Group>('http://localhost:3500/group', data).subscribe(res => {
      console.log(data);
    })
  }
}
