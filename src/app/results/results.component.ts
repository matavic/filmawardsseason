import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AwardService } from '../award/award.service';
import { NgbModal}  from '@ng-bootstrap/ng-bootstrap';
import { mapFlags } from '../map-flags';
import { TrailerModalComponent } from '../trailer-modal/trailer-modal.component';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public term: any;
  public movies$: Observable<any>;
  public movieInfo: any;
  public noImage = '';
  public movie: any = {};
  public flags = mapFlags;
  public awardsForResult: number = 0;
  public ab: boolean = false;
  public nominationsForResult: number = 0;
  public nb: boolean = false;
  public thereIsData: number;

  critics = [
    '../assets/img/critics1.jpg',
    '../assets/img/critics2.jpg',
    '../assets/img/critics3.jpg'
  ];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private awardService: AwardService,
    private modalService: NgbModal,
    private ngxLoader: NgxUiLoaderService
  ) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
  }

  ngOnInit() {
    this.ngxLoader.start();
    this.term = this.route.snapshot.paramMap.get('search');
    this.movies$ = this.awardService.search(this.term)
    .pipe(
      tap( data => {
        this.thereIsData = data.length;
        for(let i=0; i < data.length; i++){
          this.ngxLoader.startLoader(String(i));
        }
        
        for(let i=0; i < data.length; i++){
          for(let j=0; j < data[i].fwinner.length; j++){
            if (data[i].fwinner[j].trim().toLowerCase() === this.term.trim().toLowerCase()){
              this.ab = true;
              this.awardsForResult++;
            }
          }

          for(let k=0; k < data[i].fnominees.length; k++){
            if (data[i].fnominees[k].trim().toLowerCase() === this.term.trim().toLowerCase()){
              this.nb = true;
              this.nominationsForResult++;
            }
          }

          for(let m=0; m < data[i].pwinner.length; m++){
            if (data[i].pwinner[m].trim().toLowerCase() === this.term.trim().toLowerCase()){
              this.ab = true;
              this.awardsForResult++;
            }
          }

          for(let n=0; n < data[i].pnominees.length; n++){
            if (data[i].pnominees[n].trim().toLowerCase() === this.term.trim().toLowerCase()){
              this.nb = true;
              this.nominationsForResult++;
            }
          }
        }
      })
    );
    this.ngxLoader.stop();
  }

  open(content, movie) {
    this.ngxLoader.startLoader("loader-movie");
    this.awardService.getMovie(movie).subscribe( (data: any) => {
      this.movie = data;
      this.modalService.open(content, { centered: true }).result.then((result) => {
      });
      this.ngxLoader.stopLoader("loader-movie");
    })
  }

  openTrailerModal(videoId) {
    this.ngxLoader.startLoader("loader-movie");
    const modalRef = this.modalService.open(TrailerModalComponent, {backdropClass: 'custom-backdrop', centered: true, size: 'xl', windowClass: 'dark-modal'});
    let url = `https://www.youtube.com/embed/${videoId}?controls=0&autoplay=1`
    modalRef.componentInstance.videoId = url;
    this.ngxLoader.stopLoader("loader-movie");
  }

  imgLoaded(i){
    this.ngxLoader.stopLoader(i);
  }
}
