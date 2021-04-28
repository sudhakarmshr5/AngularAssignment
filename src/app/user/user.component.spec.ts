import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let mockToastrService;

  beforeEach(async(() => {
    mockToastrService = jasmine.createSpyObj('mockToastrService', ['success','error']);

    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [ToastrService],
      imports: [ReactiveFormsModule,RouterTestingModule,NgSelectModule]

    })
      .compileComponents();

      TestBed.overrideProvider(ToastrService, { useValue: mockToastrService });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a firstName input field ', () => {
    const firstName = component.userForm.controls.firstName;
    expect(firstName.valid).toBeFalsy();
    expect(firstName.hasError('required')).toBeTruthy();
    expect(firstName.hasError('pattern')).toBeFalsy();
    expect(firstName.hasError('minlength')).toBeFalsy();
    expect(firstName.pristine).toBeTruthy();
  });
  it('should be error free after firstName field has entered input values', () => {
    const firstName = component.userForm.controls.firstName;
    firstName.setValue('Sudhakar');
    expect(firstName.hasError('required')).toBeFalsy();
    expect(firstName.hasError('pattern')).toBeFalsy();
    expect(firstName.hasError('minlength')).toBeFalsy();
    expect(firstName.valid).toBeTruthy();
  });

  it('should be throw minlength error  after fname field has entered less input values', () => {
    const firstName = component.userForm.controls.firstName;
    firstName.setValue('Sudh');
    expect(firstName.hasError('required')).toBeFalsy();
    expect(firstName.hasError('pattern')).toBeFalsy();
    expect(firstName.hasError('minlength')).toBeTruthy();
    expect(firstName.valid).toBeFalsy();
  });

  

  it('should have a lastName input field ', () => {
    const lastName = component.userForm.controls.lastName;
    expect(lastName.valid).toBeFalsy();
    expect(lastName.hasError('required')).toBeTruthy();
    expect(lastName.hasError('pattern')).toBeFalsy();
    expect(lastName.hasError('minLength')).toBeFalsy();
    expect(lastName.pristine).toBeTruthy();
  });
  it('should be error free after lastName field has entered input values', () => {
    const lastName = component.userForm.controls.lastName;
    lastName.setValue('Mishra');
    expect(lastName.hasError('required')).toBeFalsy();
    expect(lastName.hasError('pattern')).toBeFalsy();
    expect(lastName.hasError('minlength')).toBeFalsy();
    expect(lastName.valid).toBeTruthy();
  });
  
  it('should be throw minlength error  after lastName field has entered less input values', () => {
    const lastName = component.userForm.controls.lastName;
    lastName.setValue('Mish');
    expect(lastName.hasError('required')).toBeFalsy();
    expect(lastName.hasError('pattern')).toBeFalsy();
    expect(lastName.hasError('minlength')).toBeTruthy();
    expect(lastName.valid).toBeFalsy();
  });

 

  it('should have a phoneNumber input field ', () => {
    const phoneNumber = component.userForm.controls.phoneNumber;
    expect(phoneNumber.valid).toBeFalsy();
    expect(phoneNumber.hasError('required')).toBeTruthy();
    expect(phoneNumber.hasError('pattern')).toBeFalsy();
    expect(phoneNumber.hasError('minLength')).toBeFalsy();
    expect(phoneNumber.pristine).toBeTruthy();
  });

  it('should throw error  after phoneNumber field has entered string input values', () => {
    const phoneNumber = component.userForm.controls.phoneNumber;
    phoneNumber.setValue('hdhfdjhf');
    expect(phoneNumber.hasError('required')).toBeFalsy();
    expect(phoneNumber.hasError('pattern')).toBeTruthy();
    expect(phoneNumber.valid).toBeFalsy();
  });

  it('should throw error  after phoneNumber field has entered less than 10 input values', () => {
    const phoneNumber = component.userForm.controls.phoneNumber;
    phoneNumber.setValue(1234);
    expect(phoneNumber.hasError('required')).toBeFalsy();
    expect(phoneNumber.hasError('pattern')).toBeTruthy();
    expect(phoneNumber.valid).toBeFalsy();
  });

  it('should have a Country select field ', () => {
    const country = component.userForm.controls.country;
    expect(country.valid).toBeFalsy();
    expect(country.hasError('required')).toBeTruthy();
    expect(country.pristine).toBeTruthy();
  });
  it('should be error free after country field has been selected', () => {
    const country = component.userForm.controls.country;
    country.setValue('India');
    expect(country.hasError('required')).toBeFalsy();
    expect(country.valid).toBeTruthy();
  });

});