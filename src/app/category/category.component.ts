import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AwardService } from '../award/award.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { categories } from '../categories/categories';
import { Observable } from 'rxjs';
import { mapCategories } from './map-categories';

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
  critics = [
    '../assets/img/critics1.jpg',
    '../assets/img/critics2.jpg',
    '../assets/img/critics3.jpg'
  ];

  constructor(
    private route: ActivatedRoute, 
    private awardService: AwardService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('categoryname');
    this.movies$ = this.awardService.getMoviesByCategory(mapCategories.get(this.category));
    this.categoryDescription = categories.find((a) => a.title === this.category).description;
  }

  open(content, movie) {
    this.awardService.getMovie(movie).subscribe( (data: any) => {
      this.movie = data;
      this.modalService.open(content, { centered: true }).result.then((result) => {
      });
    })
  }

}
