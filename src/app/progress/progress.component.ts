import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  public docs = [
    {name: 'Initial Proposal', done: 1, date: '30/09/2019'},
    {name: 'Proposal', done: 1, date: '31/10/2019'},
    {name: 'Requirements', done: 2, date: '15/11/2019'},
    {name: 'Diagrams', done: 0, date: '15/12/2019'},
    {name: 'Poster', done: 0, date: '22/12/2019'},
    {name: 'Report', done: 0, date: '05/01/2020'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
