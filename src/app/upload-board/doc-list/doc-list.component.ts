import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.css']
})
export class DocListComponent implements OnInit {
  public docs = [
    {name: 'Initial Proposal', done: 1, date: '30/09/2019'},
    {name: 'Proposal', done: 1, date: '31/10/2019'},
    {name: 'Requirements', done: 1, date: '15/11/2019'},
    {name: 'Diagrams', done: 1, date: '15/12/2019'},
    {name: 'Poster', done: 1, date: '22/06/2020'},
    {name: 'Report Summary', done: 0, date: '05/01/2020'},
    {name: 'Report', done: 2, date: '2020/06/08'},
  ];
  constructor() { }

  ngOnInit() {

  }


}
