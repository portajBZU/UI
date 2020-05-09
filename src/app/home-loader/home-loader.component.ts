import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home-loader',
  templateUrl: './home-loader.component.html',
  styleUrls: ['./home-loader.component.css']
})
export class HomeLoaderComponent implements OnInit {
public show: boolean
  constructor(public router: Router) {
    router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
console.log(event.url)
        if ('/' == event.url) {
          document.getElementById('header').setAttribute('style', 'display: none');
        } else {
          document.getElementById('header').setAttribute('style', 'display: block');
        }
      }
    });
  }


  ngOnInit() {
  }


}
