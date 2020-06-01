import { Component, OnInit } from '@angular/core';
import {OperationsService} from "../../services/operations.service";
import {Templates} from "../../interface/Templates";

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  public templates = ['Initial Proposal', 'Proposal', 'Report', 'Poster'];
  constructor(private uploadService: OperationsService) { }

  ngOnInit() {

  }
  upload(e) {
let template : Templates = {templateTitle: 'Proposal', templateType : e.target.files[0].type};
this.uploadService.uploadTemplate(e);
  }
}
