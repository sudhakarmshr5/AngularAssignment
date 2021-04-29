import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User as UserModel } from '../models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {

  loading = false;
  showError: any = false;
  userModel: UserModel;
  userForm: FormGroup;
  countryList: any;


  constructor(private toastr: ToastrService,private formBuilder: FormBuilder,private router: Router) {
    this.initializeFormControl();
  }

  ngOnInit() {
    this.countryList = [{ id: 1, name: 'India' }, { id: 2, name: 'USA' }, { id: 3, name: 'UK' }]
  }


  initializeFormControl() {
    this.userForm = this.formBuilder.group({
      'firstName': [null, [Validators.required, Validators.minLength(5)]],
      'lastName': [null, [Validators.required, Validators.minLength(5)]],
      'email': [null, [Validators.required, Validators.email]],
      'country': [null, [Validators.required]],
      'phoneNumber': [, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }


  validateUser(user) {
    if (!user.firstName) {
      return false;
    } else if (!user.lastName) {
      return false;
    } else if (!user.email) {
      return false;
    } else if (!user.phoneNumber) {
      return false;
    } else if (!user.country) {
      return false;
    }
    return true;
  }

  insertUser(user) {
    if (this.validateUser(user)) {
      this.loading = true;
      this.resetFormControl();
      this.toastr.success('User Registered successfully');
      this.loading = false;
      this.router.navigate(['/']);
    }
  }

  clearUser() {
    this.initializeFormControl();
  }

  onSubmit() {
    this.showError = true;
    if (this.userForm.valid) {
      const formValue = this.userForm.value;

      this.userModel = formValue;
      this.insertUser(this.userModel);
      this.loading = false;
    }
  }

  resetFormControl() {
    this.showError = false;
    this.clearUser();
  }
}
