import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  @Input() title: string;
  @Input() author: string;
  @Input() details: string;
  @Input() date: Date;
  public modifiedDetails;
  public modifiedTitle;
  constructor(public router: Router) {
  }

  ngOnInit() {
    console.log(this.details.length);
    if (this.title.length > 40) {
      this.modifiedTitle = this.title.substring(0, 40).concat('...');
    } else {
      this.modifiedTitle = this.title;
    }

    if (this.details.length > 150) {
      this.modifiedDetails = this.details.substring(0, 150).concat('...');
    } else {
      this.modifiedDetails = this.details;
    }

  }

  openDetails() {
    this.router.navigate(['/announcements/details']);


  }

}
