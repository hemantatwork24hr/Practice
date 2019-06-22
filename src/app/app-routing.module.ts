import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';

import { EmployeeListResolverService } from './employee/employee-list-resolver.service';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  { path: 'list', component: ListEmployeesComponent, resolve: { employeeList: EmployeeListResolverService} },
  { path: 'landing', component: InventoryComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
