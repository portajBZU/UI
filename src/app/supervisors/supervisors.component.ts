import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {SupervisorsService} from "../../services/supervisors.service";
import {Supervisors} from "../../interface/Supervisors";
import {IdeaDetails} from "../../interface/IdeaDetails";
import {Students} from "../../interface/Students";

@Component({
  selector: 'app-supervisors',
  templateUrl: './supervisors.component.html',
  styleUrls: ['./supervisors.component.css']
})


export class SupervisorsComponent implements OnInit {
  public supervisorList
  public ideaIndex = 0;
  public booleanIdea: Boolean = true;
    /* [
    {name: 'Bassem Sayrafi', groupsNo: '3', registered: '2',  detail: 'Available',
      idea: [
        {idea: 'Idea 1', details: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.', status: 'Available'},
        {idea: 'Idea 2',
        details: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every ',
        status: 'Not Available'},
        {idea: 'Idea 3',
        details: 'On the other hand, Idea 3 details  dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every ',
        status: 'Available'}] },
    {name: 'Dr. BB', groupsNo: '2', registered: '2', detail: 'Not Available',
    idea: [
      {idea: 'Idea 1',
      details: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every ',
      status: 'Not Available'},
      {idea: 'Idea 2',
      details: 'he charms of pleasure of the moment, so blinded by desire, that they cannot foresee  he charms of pleasure of the moment, so blinded by desire, that they cannot foresee  he charms of pleasure of the moment, so blinded by desire, that they cannot foresee  he charms of pleasure of the moment, so blinded by desire, that they cannot foresee  he charms of pleasure of the moment, so blinded by desire, that they cannot foresee  he charms of pleasure of the moment, so blinded by desire, that they cannot foresee  he charms of pleasure of the moment, so blinded by desire, that they cannot foresee  he charms of pleasure of the moment, so blinded by desire, that they cannot foresee  he charms of pleasure of the moment, so blinded by desire, that they cannot foresee  he charms of pleasure of the moment, so blinded by desire, that they cannot foresee he charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every ',
      status: 'Not Available'}]
   }
  ];

     */
  public supervisor: Supervisors =  {supervisorID: 0, supervisorFirstName: '', supervisorLastName: ''
    ,numberOfGroups: 0, registeredGroups: 0};
public ideasList: IdeaDetails[] =[{ideadId: 0, ideaTitle: '', ideaStatus: 'Available', ideaDiscription: '', supervisorID:0},{ideadId: 0, ideaTitle: '', ideaStatus: 'Available', ideaDiscription: '', supervisorID:0},{ideadId: 0, ideaTitle: '', ideaStatus: 'Available', ideaDiscription: '', supervisorID:0}];
  constructor(public supervisorsService: SupervisorsService) {
    this.getSupervisors();
  }
  addIdeaForm = new FormGroup({
    supervisorId: new FormControl(),
    supervisorN: new FormControl(),
    supervisorLast: new FormControl(),
    groupCapacity: new FormControl('',  [Validators.max(3), Validators.min(1)]),
    ideas: new FormControl({disabled: true})
 });

  ngOnInit() {
    this.setDefaultValues();
  }
  getSupervisors(){
    return this.supervisorsService.getSupervisors().subscribe(data => {
      this.supervisorList = data;
    });
  }


    onAdd() {
      this.supervisor.supervisorID = parseInt(this.addIdeaForm.value.supervisorId);
      this.supervisor.supervisorFirstName = this.addIdeaForm.value.supervisorN;
      this.supervisor.supervisorLastName = this.addIdeaForm.value.supervisorLast;
      this.supervisor.numberOfGroups = this.addIdeaForm.value.groupCapacity;
      this.supervisor.registeredGroups =0;
    //  this.supervisor.ideaList = this.supervisor.ideaList.concat(this.ideasList);
      this.supervisorsService.addSupervisors(this.supervisor)
    //  this.supervisor.numberOfGroups = this.addStudentForm.value.details;
      const popup = document.getElementById('popup');
      popup.className = 'display-none';
      window.location.reload();
  }
  addForm() {
    const popup = document.getElementById('popup');
    popup.className = 'display';
  }
  cancel() {
    const popup = document.getElementById('popup');
    popup.className = 'display-none';
  }
  setDefaultValues() {
    this.addIdeaForm.patchValue({groupCapacity: 1});
 }
 addIdea() {
   console.log(this.ideasList.length);
   const ideaList = document.getElementById('ideaList');
   const ideaI = this.addIdeaForm.get('ideas').value;
   const idea = document.createElement('div');
   idea.className = 'row ml-0 mr-0 font-size-button';
   idea.innerText = ideaI;
   ideaList.appendChild(idea);
   if(this.ideaIndex >3){
     this.booleanIdea = true;
     //ideaList.setAttribute('[disabled]', 'true');
   }
   this.ideasList[this.ideaIndex].ideaTitle=ideaI;
   this.ideasList[this.ideaIndex].ideaStatus='Available';
   this.ideasList[this.ideaIndex].ideadId=this.ideaIndex+1;
   this.ideasList[this.ideaIndex].ideaDiscription="dkjksjdkskj";
   this.ideaIndex++;
   console.log(this.ideasList)

 }
 openDetails(event) {
   const target = event.currentTarget.attributes.id.value;
   let info;
   // tslint:disable-next-line: prefer-for-of
   for (let i = 0; i < this.supervisorList.length; i++) {
     info = this.supervisorList[i].idea.filter(x => x.idea === target);
   }
   console.log(info);
   const popup = document.getElementById('details-pop');
   const innerPopup = document.getElementById('detailes-inner');
   const title = document.createElement('h4');
   title.innerText = info[0].idea;
   innerPopup.append(title);
   innerPopup.innerText = info[0].details;
   popup.className = 'display';
 }
 exit() {
   document.getElementById('details-pop').className = 'display-none';
 }


}
