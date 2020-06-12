import { Component, OnInit } from '@angular/core';
import {StudentsService} from "../../../services/students.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SupervisorsService} from "../../../services/supervisors.service";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  studentsList;
  supervisorsList;
  groupForm: FormGroup;
  constructor(private studentsService: StudentsService, private supervisorService: SupervisorsService) { }

  ngOnInit() {
    this.studentsService.getStudents().subscribe(res => {
      this.studentsList = res;
      console.log(res)
    });
    this.supervisorService.getSupervisors().subscribe((res) => {
      this.supervisorsList = res;
    });
    this.groupForm = new FormGroup({
      name: new FormControl(0, [Validators.required]),
      supervisor: new FormControl(0, [Validators.required]),
      group: new FormControl('', [Validators.required]),
      partner1: new FormControl(0, [Validators.required]),
      partner2: new FormControl(0, [Validators.required])
    });
    this.groupForm.controls['group'].setValue('one');
  }
  checkIfOneOrTwo(){
    if(this.groupForm.value.group === 'one'){
      return false
    } else if(this.groupForm.value.group === 'two'){
      return true;
    }
  }

}
