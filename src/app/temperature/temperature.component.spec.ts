import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TemperatureComponent } from './temperature.component';
import { ToastrService } from 'ngx-toastr';

describe('TemperatureComponent', () => {
  let component: TemperatureComponent;
  let fixture: ComponentFixture<TemperatureComponent>;
  let mockToastrService;

  beforeEach(async(() => {
    mockToastrService = jasmine.createSpyObj('mockToastrService', ['success','error']);

    TestBed.configureTestingModule({
      declarations: [TemperatureComponent],
      providers: [ToastrService],
      imports: [ReactiveFormsModule,RouterTestingModule]
    })
      .compileComponents();
      
      TestBed.overrideProvider(ToastrService, { useValue: mockToastrService });
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