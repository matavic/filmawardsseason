import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [NgbCarouselConfig]
})
export class MainComponent implements OnInit {

  // images = [
  //   '../assets/img/ceremony1.jpg',
  //   '../assets/img/ceremony2.jpg',
  //   '../assets/img/ceremony3.jpg',
  // ];
  images = [
    'https://res.cloudinary.com/dw5ahwj7g/image/upload/v1576001022/filmawardsseason/ceremony1_hitlpn.jpg',
    'https://res.cloudinary.com/dw5ahwj7g/image/upload/v1576001023/filmawardsseason/ceremony2_pxmyb2.jpg',
    'https://res.cloudinary.com/dw5ahwj7g/image/upload/v1576001024/filmawardsseason/ceremony3_w9wtai.jpg',
  ];

  constructor(config: NgbCarouselConfig) {
    config.showNavigationIndicators = false;
    config.interval = 5000;
   }

  ngOnInit() {
  }

}
