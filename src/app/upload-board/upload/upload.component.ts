import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Archives} from "../../../interface/archives";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {OperationsService} from "../../../services/operations.service";
import {SupervisorsService} from "../../../services/supervisors.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public docs = [
    {name: 'Initial Proposal', done: 1, date: '30/09/2019'},
    {name: 'Proposal', done: 1, date: '31/10/2019'},
    {name: 'Requirements', done: 1, date: '15/11/2019'},
    {name: 'Diagrams', done: 1, date: '2020/05/15'},
    {name: 'Poster', done: 1, date: '2020/06/22'},
    {name: 'Report Summary', done: 2, date: '05/01/2020'},
    {name: 'Report', done: 0, date: '2020/06/08'},
  ];

  uploadForm: FormGroup;
  public successful;
  public doc;
  public daysLeft;
  public e;

  uploadFile = new FormGroup({
    file: new FormControl()
  });

  supervisorsList;

  constructor(public fb: FormBuilder, public http: HttpClient, private uploadService: OperationsService, public supervisors: SupervisorsService) {
    this.supervisors.getSupervisors().subscribe(
      res => {
        this.supervisorsList = res;
      }
    )
  }

  public archive: Archives = {archiveTitle: '', archiveType: '', supervisodBy: '', _id: '', currentDate: null};

  ngOnInit() {
    for (let i = 0; i < this.docs.length; i++) {
      if (this.docs[i].done === 2) {
        this.doc = this.docs[i];
        this.daysLeft = this.calculateDiff(this.docs[i].date) * -1;
      }
    }
    this.uploadForm = new FormGroup({
      type: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      supervisor: new FormControl(0, [Validators.required])
    });
  }

  calculateDiff(dateSent) {
    const currentDate = new Date();
    dateSent = new Date(dateSent);
    return Math.floor((Date.UTC(currentDate.getFullYear(),
      currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(),
      dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));
  }

  upload() {
    let res;
    if (this.doc.name == 'Report') {
      res = this.uploadReport();
    } else {
      res = this.uploadService.uploadDocument(this.e);
    }
    console.log(res)
    if (res) {
      this.successful = true;
      this.doc.done = 1;
    }
  }

  handle(e) {
    //console.log(this.uploadFile.value.file);
    console.log(e)

    this.archive.archiveTitle = "Report Security";
    this.archive.supervisodBy = "Dr. Hafez Barghouthi";
    this.archive.archiveType = 'AI';
    this.e = e.target.files[0];
  }

  uploadReport() {
    console.log(this.uploadForm)
    const formData: FormData = new FormData();
    let file = <File>this.e;
    formData.append('graduationDocument', file, file.name);
    formData.append('archiveType', this.uploadForm.value.type)
    formData.append('archiveTitle', this.uploadForm.value.title)
    formData.append('supervisodBy', this.uploadForm.value.supervisor)
    let data = {formData: formData, body: this.archive}
    return this.http.post<Archives>('http://localhost:3500/uploadArchive', formData).subscribe(res => {
      console.log(res);
      return res;
    })
  }
}
