import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Announcement} from '../interface/announcement';
import {GroupsOFstudents} from '../interface/GroupsOFstudents';

@Injectable({
  providedIn: 'root'
})
export class GroupsOFstudentsService {

  constructor(private http : HttpClient) { }

  addGroupsOFstudents(data){
    return this.http.post<GroupsOFstudents>('http://localhost:3500/groups', data).subscribe(res => {
      console.log(data);
    })
  }
}
