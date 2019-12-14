import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AwardService } from '../../award/award.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation-statistic',
  templateUrl: './presentation-statistic.component.html',
  styleUrls: ['./presentation-statistic.component.css']
})
export class PresentationStatisticComponent implements OnInit {

  statisticType;
  title;
  public movies$: Observable<any>;
  public graphicData: any[];
  public tabularData: any[];
  // view: any[] = [700, 400];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'above';

  colorScheme = {
    domain: ['#92A9C0', '#CBB091', '#D89F59', '#F4E5B8', '#B7DFD1', '#BFE53B', '#8396A1', '#33C681', '#FFD453', '#A27EA8']
  };

  constructor(
    private route: ActivatedRoute, 
    private awardService: AwardService,
    private ngxLoader: NgxUiLoaderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ngxLoader.start();
    this.statisticType = this.route.snapshot.paramMap.get('type');
    switch (this.statisticType) {
      case 'awards':
        this.title = 'Most Awarded Films - Season 2019-2020';
        break;
      case 'nominations':
        this.title = 'Most Nominated Films - Season 2019-2020';
        break;
      default:
        this.title = `${this.statisticType} - This Year\'s Statistics`;
        break;
    }
    this.awardService.getStatistics(this.statisticType).subscribe( (data) => {
      
      switch (this.statisticType) {
        case 'awards':
          this.tabularData = data;
          this.graphicData = data.map(item => {
            return {
              name: item._id,
              value: item.awards
            };
          }).slice(0,10);
          break;
        case 'nominations':
          this.tabularData = data;
          this.graphicData = data.map(item => {
            return {
              name: item._id,
              value: item.nominations
            };
          }).slice(0,10);
          break;
        default:
          this.tabularData = data;
          this.graphicData = data.filter(item => {
            if(item.awards)
              return {
                name: item._id,
                value: item.awards
              };
          }).map(item => {
            return {
              name: item._id,
              value: item.awards
            };
          }).slice(0,10);
          break;
      }

      this.ngxLoader.stop();
    });
  }

  onSelect(data): void {
    this.router.navigate(['/results', data.name]);
  }
}
