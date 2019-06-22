import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { IEmployee } from './employee';

@Component( {
	selector: 'list-employees',
	templateUrl: './list-employees.component.html',
	styleUrls: [ './list-employees.component.css']
} )

export class ListEmployeesComponent implements OnInit, AfterViewInit {

	public margin: number;
	public selected: string;
	public tabs: string[];

	public employees: IEmployee[];

	displayedColumns: string[] = ['id', 'employee_name', 'employee_age', 'employee_salary'];
	dataSource = new MatTableDataSource< IEmployee >( this.employees );
  
	@ViewChild( MatPaginator, {static: true}) paginator: MatPaginator;
  
	ngOnInit() {
	    this.dataSource.paginator = this.paginator;
	}

	constructor( private _route: ActivatedRoute ) {
		this.calculateMargin();
	}

	ngAfterViewInit() {
		this.employees = this._route.snapshot.data['employeeList'];
	}

	displayContent( tab: string) {
		this.selected = tab;
	}

	calculateMargin() {
		this.tabs = [ 'EFGH', 'ABCD' ];
		this.margin =  ( 80 / this.tabs.length );
	}
}