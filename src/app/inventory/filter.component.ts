import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  	selector: 'app-filter',
  	templateUrl: './filter.component.html',
  	styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

	public selectedSortBy: string = 'title';

	public sortBy: Array <any>;
	
	@Input()
	count: number;

	@Output()

	onSortByChange: EventEmitter<string> = new EventEmitter<string>();

  	constructor() {
		this.sortBy = [ 'title' , 'description1', 'description2', 'managed_by' ];
	}

  	ngOnInit() {
	  
	}

	onSortByChanged() {
		this.onSortByChange.emit( this.selectedSortBy );
		console.log( this.selectedSortBy );
	}

}
