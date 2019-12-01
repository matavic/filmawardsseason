import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filmawardsseason';
  public isMenuCollapsed = true;
  public fecha = new Date().getFullYear();
}
