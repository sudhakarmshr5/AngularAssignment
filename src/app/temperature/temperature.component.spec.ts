import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TemperatureComponent } from './temperature.component';

describe('TemperatureComponent', () => {
  let component: TemperatureComponent;
  let fixture: ComponentFixture<TemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemperatureComponent],
      imports: [ReactiveFormsModule,RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have an input field', () => {
    const insert = component.tempForm.controls.temperature;
    expect(insert.valid).toBeFalsy();
    expect(insert.hasError('required')).toBeTruthy();
    expect(insert.pristine).toBeTruthy();
  });
  it('should have throw error when value is set to more than 150', () => {
    const insert = component.tempForm.controls.temperature;
    insert.setValue(200);
    expect(insert.valid).toBeFalsy();
    expect(insert.hasError('required')).toBeFalsy();
    expect(insert.hasError('max')).toBeTruthy();
    expect(insert.pristine).toBeTruthy();
  });
  it('should have throw error when value is set to less than 1', () => {
    const insert = component.tempForm.controls.temperature;
    insert.setValue(0);
    expect(insert.valid).toBeFalsy();
    expect(insert.hasError('required')).toBeFalsy();
    expect(insert.hasError('min')).toBeTruthy();
    expect(insert.pristine).toBeTruthy();
  });
  it('should call insert on form submit',()=>{
    spyOn(component,'insert').and.callThrough();
    component.tempForm.controls.temperature.setValue(12);
    component.onSubmit();
    expect(component.insert).toHaveBeenCalled();
  });

  it('calculateMode should return mode', () => {
    component.tempForm.controls.temperature.setValue(12);
    component.onSubmit();
    expect(component.mode).toEqual(12);
  });
  it('calculateMean should return mode', () => {
    component.tempForm.controls.temperature.setValue(12);
    component.onSubmit();
    expect(component.mean).toEqual(12.00);
  });
  it('calculateMin should return mode', () => {
    component.tempForm.controls.temperature.setValue(12);
    component.onSubmit();
    expect(component.min).toEqual(12);
  });
  it('calculateMax should return mode', () => {
    component.tempForm.controls.temperature.setValue(12);
    component.onSubmit();
    expect(component.max).toEqual(12);
  });
});