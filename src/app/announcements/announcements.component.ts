import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  public announcements = [
  {title: 'Registering for Introduction to graduation project', author: 'Subhi Ahmad',
  date: '30/09/2019', 
  details: 'On the other hand, Idea 3 details  dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire'},
  {title: 'Choose your partners', author: 'S Ahmad', 
  // tslint:disable-next-line: max-line-length
  date: '06/10/2019', 
  details: 'On the other hand, On the other hand,On the other hand, Idea 3 details  dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire'}];
  constructor(public router: Router) { }
  ngOnInit() {
  }
  openForm(){
    console.log('open')
    // tslint:disable-next-line: no-unused-expression
    this.router.navigate(['/add']);
  }

}
