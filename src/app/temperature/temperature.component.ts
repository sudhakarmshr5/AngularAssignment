import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-temperature',
    templateUrl: './temperature.component.html',
})

export class TemperatureComponent implements OnInit {

    tempForm: FormGroup;
    min: number;
    max: number;
    mean: number;
    mode: number;
    temperatureData: any;

    constructor(private formBuilder: FormBuilder,
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
        const formValue = this.tempForm.value;
        this.insert(formValue.temperature);
        this.tempForm.reset();
    }


    insert(num: number): any {
        if (num > 1 && num < 150) {
            this.temperatureData.push(num);
            this.min = Math.min.apply(null, this.temperatureData);
            this.max = Math.max.apply(null, this.temperatureData);
            this.mean = Number(this.mean_Temperature().toFixed(2)); // casting to number as toFixed returns a string
            this.mode = this.calculate_Mode();
            return this.temperatureData;
        }
        else {
            return 'Temperature should not be less than 1 and greater than 150';
        }
    }



    mean_Temperature(): number {
        let totalSum = 0;
        this.temperatureData.forEach((element) => {
            totalSum += element;
        });
        return totalSum / this.temperatureData.length;
    }


    calculate_Mode(): number {
        return this.temperatureData.reduce(function(counts,key){
            var curCount = (counts[key+''] || 0) + 1;
            counts[key+''] = curCount;
            if (curCount > counts.max) { counts.max = curCount; counts.mode = key; }
            return counts;
          }, {max:0, mode: null}).mode
    }

    get_Min(): number {
        return this.min;
    }
    get_Max(): number {
        return this.max;
    }
    get_Mean(): number {
        return this.mean;
    }
    get_Mode(): number {
        return this.mode;
    }
}
