import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [NgbCarouselConfig]
})
export class MainComponent implements OnInit {

  images = [
    '../assets/img/ceremony1.jpg',
    '../assets/img/ceremony2.jpg',
    '../assets/img/ceremony3.jpg',
  ];

  constructor(config: NgbCarouselConfig) {
    config.showNavigationIndicators = false;
    config.interval = 5000;
   }

  ngOnInit() {
  }

}
