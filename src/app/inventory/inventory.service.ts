import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

	private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

	  constructor( private http: HttpClient ) { }

	  getCards(): Observable< Inventory[] > {
		  return this.http.get<Inventory[]>( this.serviceUrl );
	  }
}
