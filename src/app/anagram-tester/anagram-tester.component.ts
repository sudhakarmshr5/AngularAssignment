import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-anagram-tester',
    templateUrl: './anagram-tester.component.html',
})

export class AnagramTesterComponent implements OnInit {

    anagramForm: FormGroup;
    showError: boolean;

    constructor(private route: ActivatedRoute,private toastr: ToastrService,
        private formBuilder: FormBuilder,
        private router: Router) {
        this.initializeFormControl();

    }

    ngOnInit() {

    }

    initializeFormControl() {
        this.anagramForm = this.formBuilder.group({
          'firstString': [null, [Validators.required]],
          'secondString': [null,[Validators.required]]
        });
      }

    onSubmit() {
        this.showError = true;
        const formValue = this.anagramForm.value;
        if (this.validateForm(formValue)) {
            const firstStr = formValue.firstString;
            const secondStr = formValue.secondString;

            this.isAnagram(firstStr, secondStr); // test anagram
            this.showError = false;
            this.anagramForm.reset();
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

    isAnagram(firstStr, secondStr) {
        if (firstStr.split('').sort().join('') === secondStr.split('').sort().join(''))
            this.toastr.success('true')
        else
            this.toastr.error('false')
    }

  }