import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.css']
})
export class AnnouncementDetailsComponent implements OnInit {
  public announcements = [
    {title: 'Registering for Introduction to graduation project', author: 'Subhi Ahmad',
    date: '30/09/2019', 
    details: 'On the other hand, Idea 3 details  dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire' +
  ' On the other hand, Idea 3 details  dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire' +
' On the other hand, Idea 3 details  dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire'+
' On the other hand, Idea 3 details  dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire' +
  ' On the other hand, Idea 3 details  dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire' +
' On the other hand, Idea 3 details  dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire'
}];
  constructor() { }

  ngOnInit() {
  }

}
