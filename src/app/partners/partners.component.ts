import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentsService } from 'src/services/students.service';
import { Students } from 'src/interface/Students';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  public student: Students ={name: '', groupDetails: '', studentId: 0};
  public studentIds =[];
  public partnersIds =[];
  public filtered =[];
  public studentsList;
  constructor(public studentService: StudentsService, public router: Router) {
    this.getStudents();
    console.log(JSON.parse(localStorage.getItem('user')));
    console.log(JSON.parse(localStorage.getItem('password')));
   }
  addStudentForm = new FormGroup({
    details: new FormControl(),
    studentN: new FormControl(),
    studentID: new FormControl()
 });

  ngOnInit() {
    this.setDefaultValues();
  }

  onAdd() {
    this.student.name = this.addStudentForm.value.studentN;
    this.student.studentId = parseInt(this.addStudentForm.value.studentID);
    this.student.groupDetails = this.addStudentForm.value.details;
    this.studentService.addStudents(this.student);
    const popup = document.getElementById('popup');
    popup.className = 'display-none';
    window.location.reload();

  }
  getStudents() {
    this.studentService.getStudents().subscribe(data => {
      this.studentsList = data;
      //console.log(this.studentsList)
      for(let i=0; i<this.studentsList.length; i++) {
        this.studentIds.push(this.studentsList[i].idStudent);
        this.partnersIds.push(this.studentsList[i].partnerId)
       // this.filtered = this.studentIds.filter(f => this.partnersIds.includes(f));
      }
      console.log(this.filtered);
      console.log(this.studentIds)
    });
  }
  addForm() {
    this.setDefaultValues();
    const popup = document.getElementById('popup');
    popup.className = 'display';
  }
  cancel() {
    const popup = document.getElementById('popup');
    popup.className = 'display-none';
  }
  setDefaultValues() {
    this.addStudentForm.patchValue({details: 'no-group'});
    this.addStudentForm.patchValue({studentN: 'Name'});
 }
 edit(event) {
  const target = event.currentTarget.attributes.id.value;
  const info = this.studentsList.filter(x => x.name === target);
  const popup = document.getElementById('popup');
  popup.className = 'display';
  this.addStudentForm.patchValue({details: info[0].detail});
  this.addStudentForm.patchValue({ studentN: info[0].name});

 }
}
