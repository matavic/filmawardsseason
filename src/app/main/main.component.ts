import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgxUiLoaderService } from 'ngx-ui-loader';

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
    'https://res.cloudinary.com/dw5ahwj7g/image/upload/v1576174106/filmawardsseason/red-carpet_dxnybz.png'
  ];

  public hidImage1: boolean = true;
  public hidImage2: boolean = true;
  public hidImage3: boolean = true;

  constructor(config: NgbCarouselConfig,
    private ngxLoader: NgxUiLoaderService) {
    config.showNavigationIndicators = false;
    config.interval = 5000;
   }

  ngOnInit() {
    this.ngxLoader.start();
  }

  imgLoaded1(){
    this.hidImage1 = false;
    if(!this.hidImage2 && !this.hidImage3)
      this.stopLoader();
  }

  imgLoaded2(){
    this.hidImage2 = false;
    if(!this.hidImage1 && !this.hidImage3)
      this.stopLoader();
  }

  imgLoaded3(){
    this.hidImage3 = false;
    if(!this.hidImage1 && !this.hidImage2)
      this.stopLoader();
  }

  stopLoader(){
    this.ngxLoader.stop();
  }

}
