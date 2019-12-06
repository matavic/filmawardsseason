import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AwardService {

  constructor(private http: HttpClient) {
   }

   getMovies(award){
     return this.http.get(`${environment.apiUrl}awards?a=${award}`);
   }

   getMovie(movie) {
    const options = { params: new HttpParams().set('m', movie) };
    return this.http.get(`${environment.apiUrl}movie`, options);
   }

}
