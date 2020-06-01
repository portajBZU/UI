import { Injectable } from '@angular/core';
import {Templates} from '../interface/Templates';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SaveAS} from "file-saver"

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private http : HttpClient) { }

  uploadArchive(e){
    let formData = new FormData();
    let file = <File>e;
    formData.append('graduationDocument',file)
    return this.http.post<any>('http://localhost:3500/uploadArchive', formData).subscribe(res => {
      console.log(res);
    })
  }

  uploadDocument(e){
    let formData = new FormData();
    let file = <File>e;
    formData.append('document',file)

    let headers = new HttpHeaders()
      .set('Accept', 'text/csv');

    return this.http.post<any>('http://localhost:3500/uploadDocument', formData,{
      headers: headers
    }).subscribe(res => {
      console.log(res);
      return res;
    })
  }

  uploadTemplate(e){
    let formData = new FormData();
    let file = <File>e;
    formData.append('templateDocument',file)
    return this.http.post<any>('http://localhost:3500/uploadTemplate', formData).subscribe(res => {
      console.log(res);
    })
  }
  download (type: string, id: string){
    return this.http.get<any>(`http://localhost:3500/download/${type}/${id}`)
      .subscribe(
        data => {

          window.open(window.URL.createObjectURL(data));

  })
  }
}
