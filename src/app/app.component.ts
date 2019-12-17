import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AwardService } from './award/award.service';
import {Observable, of} from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searching = false;
  searchFailed = false;
  title = 'filmawardsseason';
  public isMenuCollapsed = true;
  public fecha = new Date().getFullYear();
  public searchText;

  constructor(
    private router: Router,
    private awardService: AwardService
  ){
    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-154618974-1', {
        'page_path': event.urlAfterRedirects
      });
    });
  }

  onSubmit(t = ''){
    if(t.trim()){
      this.router.navigate(['/results', t.trim()]);
      this.searchText = "";
      return;
    }
    if(this.searchText){
      this.router.navigate(['/results', this.searchText.trim()]);
      this.searchText = "";
    }
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      filter(value => value.trim().length >= 2),
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.awardService.predictive(term.trim()).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )
}
