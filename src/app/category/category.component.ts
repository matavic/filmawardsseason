import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AwardService } from '../award/award.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { categories } from '../categories/categories';
import { Observable } from 'rxjs';
import { mapCategories } from './map-categories';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { mapFlags } from '../map-flags';
import { TrailerModalComponent } from '../trailer-modal/trailer-modal.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public category: any;
  public categoryDescription: string;
  public movies$: Observable<any>;
  public movieInfo: any;
  public movie: any = {};
  public flags = mapFlags;
  critics = [
    '../assets/img/critics1.jpg',
    '../assets/img/critics2.jpg',
    '../assets/img/critics3.jpg'
  ];

  constructor(
    private route: ActivatedRoute, 
    private awardService: AwardService,
    private modalService: NgbModal,
    private ngxLoader: NgxUiLoaderService
  ) { }

  ngOnInit() {
    this.ngxLoader.start();
    this.category = this.route.snapshot.paramMap.get('categoryname');
    this.categoryDescription = categories.find((a) => a.title === this.category).description;
    this.movies$ = this.awardService.getMoviesByCategory(mapCategories.get(this.category));
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

}
