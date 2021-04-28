import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-anagram-tester',
  templateUrl: './anagram-tester.component.html',
})

export class AnagramTesterComponent {

  anagramForm: FormGroup;
  result:boolean;

  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.initializeFormControl();

  }

  initializeFormControl() {
    this.anagramForm = this.formBuilder.group({
      'firstString': [null, [Validators.required]],
      'secondString': [null, [Validators.required]]
    });
  }

  onSubmit() {
      this.isAnagram(); // test anagram
      this.anagramForm.reset();
  }

  isAnagram() {
    this.result = this.anagramForm.value.firstString.split('').sort().join('') === this.anagramForm.value.secondString.split('').sort().join('');
  }

}