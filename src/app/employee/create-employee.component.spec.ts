import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeComponent } from './create-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';

describe('CreateEmployeeComponent', () => {
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule
      ],
      declarations: [ 
        CreateEmployeeComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the employee component', async( () => {
    const fixture = TestBed.createComponent( CreateEmployeeComponent );
    const app = fixture.debugElement.componentInstance;
    expect( app ).toBeTruthy();
  }));

  it( 'should render title in a h1 tag', async( () => {
      const fixture = TestBed.createComponent( CreateEmployeeComponent );
      fixture.detectChanges();
      const complied = fixture.debugElement.nativeElement;
      expect( complied.querySelector( 'h1' ).textContent ).toContain( 'Create employee');
  }) );
});
