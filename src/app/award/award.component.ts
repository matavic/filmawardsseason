import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AwardService } from './award.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { awards } from '../awards/awards';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css']
})
export class AwardComponent implements OnInit {

  public award: any;
  public awardDescription: string;
  public awardImage: string;
  public awardDate: string;
  public movies$: Observable<any>;
  public movieInfo: any;
  public noImage = '';
  public movie: any = {};
  critics = [
    '../assets/img/critics1.jpg',
    '../assets/img/critics2.jpg',
    '../assets/img/critics3.jpg'
  ];

  constructor(
    private route: ActivatedRoute, 
    private awardService: AwardService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.award = this.route.snapshot.paramMap.get('awardname');
    this.movies$ = this.awardService.getMovies(this.award);
    this.awardDescription = awards.find((a) => a.title === this.award).description;
    this.awardImage = awards.find((a) => a.title === this.award).image;
    this.awardDate = awards.find((a) => a.title === this.award).date;
  }

  open(content, movie) {
    this.awardService.getMovie(movie).subscribe( (data: any) => {
      this.movie = data;
      this.modalService.open(content, { centered: true }).result.then((result) => {
      });
    })
  }
}
