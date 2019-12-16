import { Component, OnInit } from '@angular/core';
import { awards } from './awards';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  awards: any;
  constructor(private ngxLoader: NgxUiLoaderService) { 
  }

  ngOnInit() {
    this.awards = awards;
    for(let i=0; i < 20; i++)
      this.ngxLoader.startLoader(String(i));
  }

  imgLoaded(i){
    this.ngxLoader.stopLoader(i);
  }

}
