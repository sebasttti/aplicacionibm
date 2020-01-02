import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  Images = [
    'http://lorempixel.com/1366/450/sports/1',
    'http://lorempixel.com/1366/450/sports/2',
    'http://lorempixel.com/1366/450/sports/3',
    'http://lorempixel.com/1366/450/sports/4',
    'http://lorempixel.com/1366/450/sports/5',
    'http://lorempixel.com/1366/450/sports/6',
    'http://lorempixel.com/1366/450/sports/7',
    'http://lorempixel.com/1366/450/sports/8'
  ];

  constructor() { }

  ngOnInit() {
  }

}
