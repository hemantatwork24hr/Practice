import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { IEmployee } from './employee';
import { MatSort } from '@angular/material';

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
	dataSource = new MatTableDataSource< IEmployee >( this._route.snapshot.data['employeeList'] );
  
	@ViewChild( MatSort ) sort: MatSort;
	
	@ViewChild( MatPaginator, {static: true}) paginator: MatPaginator;
  
	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	constructor( private _route: ActivatedRoute ) {
		//this.employees = this._route.snapshot.data['employeeList'];
		this.calculateMargin();
	}

	ngAfterViewInit() {

	}

	displayContent( tab: string) {
		this.selected = tab;
	}

	calculateMargin() {
		this.tabs = [ 'EFGH', 'ABCD' ];
		this.margin =  ( 80 / this.tabs.length );
	}
}