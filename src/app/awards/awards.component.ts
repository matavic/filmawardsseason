import { Component, OnInit } from '@angular/core';
import { awards } from './awards';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  awards: any;
  constructor() { }

  ngOnInit() {
    this.awards = awards;
  }

}
