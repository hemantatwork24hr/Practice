import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { EmployeeService } from './employee/employee.service';
import { EmployeeListResolverService } from './employee/employee-list-resolver.service';
import { InventoryService } from './inventory/inventory.service';
import { InventoryComponent } from './inventory/inventory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatPaginatorModule, MatTableModule, MatSortModule } from '@angular/material';
import { FilterComponent } from './inventory/filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ListEmployeesComponent,
    InventoryComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
	MatPaginatorModule,
	MatTableModule,
	MatSortModule,
	FormsModule
  ],
  providers: [EmployeeService, EmployeeListResolverService, InventoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
