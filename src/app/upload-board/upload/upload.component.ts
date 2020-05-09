import { Component, OnInit, Input } from '@angular/core';

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
    {name: 'Diagrams', done: 2, date: '2020/05/15'},
    {name: 'Poster', done: 0, date: '22/12/2019'},
    {name: 'Report Summary', done: 0, date: '05/01/2020'},
    {name: 'Report', done: 0, date: '05/01/2020'},
  ];
  public doc;
  public daysLeft;
  constructor() { }

  ngOnInit() {

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.docs.length; i++) {
      if (this.docs[i].done === 2) {
        this.doc = this.docs[i];
        this.daysLeft = this.calculateDiff(this.docs[i].date) * -1;
      }
    }
  }
  calculateDiff(dateSent) {
    const currentDate = new Date();
    dateSent = new Date(dateSent);

    // tslint:disable-next-line: max-line-length
    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) / (1000 * 60 * 60 * 24));
}

}
