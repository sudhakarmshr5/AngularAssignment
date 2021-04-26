import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-temperature',
    templateUrl: './temperature.component.html',
})

export class TemperatureComponent implements OnInit {

    tempForm: FormGroup;
    showError: boolean;

    constructor(private route: ActivatedRoute,private toastr: ToastrService,
        private formBuilder: FormBuilder,
        private router: Router) {
        this.initializeFormControl();

    }

    ngOnInit() {

    }

    initializeFormControl() {
        this.tempForm = this.formBuilder.group({
          'number': [null, [Validators.required]]
        });
      }

    onSubmit() {
        this.showError = true;
        const formValue = this.tempForm.value;
        if (this.validateForm(formValue)) {
            this.showError = false;
            this.tempForm.reset();
        }
    }

    validateForm(values){
        if (!values.firstName) {
            return false;
          } else if (!values.lastName) {
            return false;
          } 
          return true;
    }


  }