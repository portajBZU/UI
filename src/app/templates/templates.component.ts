import {Component, OnInit} from '@angular/core';
import {OperationsService} from "../../services/operations.service";
import {Templates} from "../../interface/Templates";
import {TemplatesService} from "../../services/templates.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  public file;
  public templates;
  public temp: Templates = {templateTitle: '', templateType: ''};
  public uploadFile: FormGroup;
  public show = false;
  constructor(private http: HttpClient, private uploadService: OperationsService, private templatesService: TemplatesService) {
    this.templatesService.getTemplates().subscribe(res => {
      this.templates = res;
    });
  }

  ngOnInit() {
    this.uploadFile = new FormGroup({
      file: new FormControl(),
      title: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required])
    });
  }

  download(id: string) {
    console.log(id)
    // this.downloadService.download('archives', id);
    this.downloadFile('templates', id)
  }

  upload() {
    this.temp.templateType = this.uploadFile.value.type;
    this.temp.templateTitle = this.uploadFile.value.title;
    this.uploadService.uploadTemplate(this.temp,this.file);
  }
  handle(e){
    this.file = e.target.files[0];
  }
  downloadFile(type: string, id: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    this.http.get(`http://localhost:3500/download/${type}/${id}`, {
      headers: headers,
      responseType: 'blob' as 'json'
    }).subscribe(res => {
      console.log(res)
      window.open(window.URL.createObjectURL(res));

    });
  }
  showUpload(res?){
    if(res)
    this.show = true;
  }
}
