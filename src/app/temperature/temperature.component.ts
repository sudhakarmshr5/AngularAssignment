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
    min: number;
    max: number;
    mean: number;
    mode: number;
    temperatureData: any;

    constructor( private toastr: ToastrService,
        private formBuilder: FormBuilder,
        private router: Router) {
        this.initializeFormControl();

    }

    ngOnInit() {

    }

    initializeFormControl() {
        this.tempForm = this.formBuilder.group({
            'temperature': [null, [Validators.required]]
        });
    }

    onSubmit() {
        this.showError = true;
        const formValue = this.tempForm.value;
        this.insert(formValue.temperature);
        this.showError = false;
        this.tempForm.reset();
    }


    insert(num: number): any {
        if (num > 0 && num < 150) {
            this.temperatureData.push(num);
            this.min = Math.min.apply(null, this.temperatureData);
            this.max = Math.max.apply(null, this.temperatureData);
            this.mean = Number(this.meanTemperature().toFixed(2));
            this.mode = this.calculateMode();
            return this.temperatureData;
        }
        else {
            this.toastr.error('Temperature should be integer');
        }
    }



    meanTemperature(): number {
        let totalSum = 0;
        this.temperatureData.forEach((element) => {
            totalSum += element;
        });
        return totalSum / this.temperatureData.length;
    }


    calculateMode(): number {
        let mode = 0;
        for (let i = 0; i < this.temperatureData.length; i++) {
            for (let j = 0; j < i; j++) {
                if (this.temperatureData[j] === this.temperatureData[i]) {
                    mode = this.temperatureData[j];
                }
            }
        }
        return mode;
    }

    getMin(): number {
        return this.min;
    }
    getMax(): number {
        return this.max;
    }
    getMean(): number {
        return this.mean;
    }
    getMode(): number {
        return this.mode;
    }
}
