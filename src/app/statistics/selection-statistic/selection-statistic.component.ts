import { Component, OnInit } from '@angular/core';
import { awards } from '../../awards/awards';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection-statistic',
  templateUrl: './selection-statistic.component.html',
  styleUrls: ['./selection-statistic.component.css']
})
export class SelectionStatisticComponent implements OnInit {

  awards: any;
  buttonDisabled: boolean;
  selectedAward: string = "";
  constructor(private router: Router) { }

  ngOnInit() {
    this.awards = awards;
  }

  goToStatistics(par){
    if(par){
      this.router.navigate(['statistics' , this.selectedAward]);
    }
  }

  changeSuit(event){
    this.selectedAward = event.target.value;
    this.buttonDisabled = true;
  }

}
