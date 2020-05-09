 import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Announcement} from '../interface/announcement';
import {Supervisors} from '../interface/Supervisors';

@Injectable({
  providedIn: 'root'
})
export class SupervisorsService {

  constructor(private http : HttpClient) { }

  addSupervisors(data){
    return this.http.post<Supervisors>('http://localhost:3500/supervisors', data).subscribe(res => {
      console.log(data);
    })
  }
  getSupervisors() {
    return this.http.get<Supervisors>('http://localhost:3500/supervisors');
  }
}
