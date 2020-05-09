import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Archives} from '../interface/archives';

@Injectable({
  providedIn: 'root'
})
export class ArchivesService {

  constructor(private http: HttpClient) {
  }

  addArchives(data) {
    return this.http.post<Archives>('http://localhost:3500/archives', data).subscribe(res => {
      console.log(data);
    })
  }
}
