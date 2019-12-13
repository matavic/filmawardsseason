import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AwardService } from '../../award/award.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-presentation-statistic',
  templateUrl: './presentation-statistic.component.html',
  styleUrls: ['./presentation-statistic.component.css']
})
export class PresentationStatisticComponent implements OnInit {

  statisticType;
  title;
  constructor(
    private route: ActivatedRoute, 
    private awardService: AwardService,
    private ngxLoader: NgxUiLoaderService
  ) { }

  ngOnInit() {
    // this.ngxLoader.start();
    this.statisticType = this.route.snapshot.paramMap.get('type');
    switch (this.statisticType) {
      case 'awards':
        this.title = 'Most Awarded Films - Season 2019-2020';
        break;
      case 'nominations':
        this.title = 'Most Nominated Films - Season 2019-2020';
        break;
      default:
        this.title = `${this.statisticType} - This Year Statistics`;
        break;
    }
    console.log(this.statisticType);
    // this.awardDescription = awards.find((a) => a.title === this.award).description;
    // this.awardImage = awards.find((a) => a.title === this.award).image;
    // this.awardDate = awards.find((a) => a.title === this.award).date;
    // this.movies$ = this.awardService.getMovies(this.award);
    // this.ngxLoader.stop();
  }

}
