import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationError, NavigationEnd, NavigationCancel, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Crud';

  showLoadingIndicator = true;

  constructor( private _router: Router ) {
	  this._router.events.subscribe( ( routerEvent: Event) => {
		if( routerEvent instanceof NavigationStart ) {
			this.showLoadingIndicator = true;
		}

		if( routerEvent instanceof NavigationEnd ||
			routerEvent instanceof NavigationError ||
			routerEvent instanceof NavigationCancel ) {
				this.showLoadingIndicator = false;
			}
	  } );
  }
}
