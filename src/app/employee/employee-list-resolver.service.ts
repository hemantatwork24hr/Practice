import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { IEmployee } from './employee';
import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Observable } from 'rxjs';

@Injectable()

export class EmployeeListResolverService implements Resolve<IEmployee[]> {

    constructor( private _employeeService: EmployeeService ) {
    }

    resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<IEmployee[]> {
        return this._employeeService.getEmployees();
    }
}
