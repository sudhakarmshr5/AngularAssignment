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
    })
      .compileComponents();
      
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
  
});