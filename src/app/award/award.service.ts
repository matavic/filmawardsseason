import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpParams } from "@angular/common/http";
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AwardService {

  constructor(private http: HttpClient) {
   }

   getMovies(award){
     return this.http.get(`${environment.apiUrl}awards?a=${award}`);
   }

   getMoviesByCategory(category){
     return this.http.get(`${environment.apiUrl}categories?c=${category}`);
   }

   getMovie(movie) {
    const options = { params: new HttpParams().set('m', movie) };
    return this.http.get(`${environment.apiUrl}movie`, options);
   }

   search(term) {
    const options = { params: new HttpParams().set('t', term) };
    return this.http.get(`${environment.apiUrl}search`, options);
   }

   getStatistics(type){
    let options = {};
    switch (type) {
      case 'awards':
        options = { params: new HttpParams().set('t', 'p') };
        break;
      case 'nominations':
        options = { params: new HttpParams().set('t', 'n') };
        break;
      default:
        options = { params: new HttpParams().set('t', 'a').set('award', type) };
        break;
    }
    
    return this.http.get<any>(`${environment.apiUrl}count`, options);
   }

   predictive(term: string) {
    const options = { params: new HttpParams().set('search', term) };
    if (term === '') {
      return of([]);
    }

    return this.http.get(`${environment.apiUrl}typeahead`, options);
  }
}
