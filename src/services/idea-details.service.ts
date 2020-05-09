import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Announcement} from '../interface/announcement';
import {IdeaDetails} from '../interface/IdeaDetails';

@Injectable({
  providedIn: 'root'
})
export class IdeaDetailsService {

  constructor(private http : HttpClient) { }

  addIdeaDetails(data){
    return this.http.post<IdeaDetails>('http://localhost:3500/idea', data).subscribe(res => {
      console.log(data);
    })
  }
}
