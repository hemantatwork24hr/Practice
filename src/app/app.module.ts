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
import { MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ListEmployeesComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
	MatPaginatorModule,
	MatTableModule
  ],
  providers: [EmployeeService, EmployeeListResolverService, InventoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
