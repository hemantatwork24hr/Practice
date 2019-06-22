import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  public workers: any[] = [ 
    { x: 'first', y : '1st'},
    { x: 'second', y : '2nd'},
    { x: 'third', y : '3rd'},
    { x: 'forth', y : '4th'}
  ];
  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup( {
      fullName: new FormControl(),
      email: new FormControl()
    })
  }

  onSubmit(): void {
    console.log( this.employeeForm );
    console.log( this.workers );
  }
}
