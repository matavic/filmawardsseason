import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router
  ){}

  title = 'filmawardsseason';
  public isMenuCollapsed = true;
  public fecha = new Date().getFullYear();
  public searchText;

  onSubmit(){
    if(this.searchText){
      this.router.navigate(['/results', this.searchText.trim()]);
      this.searchText = "";
    }
  }
}
