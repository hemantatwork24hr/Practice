import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-inventory',
	templateUrl: './inventory.component.html',
	styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  
	public cards: any[] = [
		{ title: 'VxBlock', description1: 'VXB100', description2: 'FOC21261DS1', managed_by : 'Embedded AMP', location: 'Hopkinton M.A.', sync_date: '04/01/2019 8:00 p.m', image: 'assets/images/1.jpg'},
		{ title: 'VxBlock', description1: 'VXB100', description2: 'FOC21261DS1', managed_by : 'Embedded AMP', location: 'Hopkinton M.A.', sync_date: '04/01/2019 8:00 p.m', image: 'assets/images/1.jpg'},
		{ title: 'VxBlock', description1: 'VXB100', description2: 'FOC21261DS1', managed_by : 'Embedded AMP', location: 'Hopkinton M.A.', sync_date: '04/01/2019 8:00 p.m', image: 'assets/images/1.jpg'},
		{ title: 'VxBlock', description1: 'VXB100', description2: 'FOC21261DS1', managed_by : 'Embedded AMP', location: 'Hopkinton M.A.', sync_date: '04/01/2019 8:00 p.m', image: 'assets/images/1.jpg'},
		{ title: 'VxBlock', description1: 'VXB100', description2: 'FOC21261DS1', managed_by : 'Embedded AMP', location: 'Hopkinton M.A.', sync_date: '04/01/2019 8:00 p.m', image: 'assets/images/1.jpg'},
	]

	constructor() { 
		console.log( this.cards );
	}

	ngOnInit() {
	}

}
