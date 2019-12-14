import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from '../environments/environment';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router
  ){
    const scriptTag = document.createElement('script');
    scriptTag.async = true;
    scriptTag.src = 'https://www.googletagmanager.com/gtag/js?id=' + environment.code;
    document.head.prepend(scriptTag);

    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-154618974-1', {
        'page_path': event.urlAfterRedirects
      });
    });
  }

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
