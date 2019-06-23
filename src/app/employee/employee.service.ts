import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private httpClient: HttpClient ) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>( 'http://dummy.restapiexample.com/api/v1/employees' );
  }
}
