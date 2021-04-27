import { ComponentFixture, TestBed, async} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AnagramTesterComponent } from './anagram-tester.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

describe('AnagramTesterComponent', () => {
  let component: AnagramTesterComponent;
  let fixture: ComponentFixture<AnagramTesterComponent>;
  let mockToastrService;

  beforeEach(async(() => {
    mockToastrService = jasmine.createSpyObj('mockToastrService', ['success','error']);

    TestBed.configureTestingModule({
      declarations: [AnagramTesterComponent],
      providers: [ToastrService],
      imports: [ReactiveFormsModule,RouterTestingModule]
    })
      .compileComponents();
      
      TestBed.overrideProvider(ToastrService, { useValue: mockToastrService });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagramTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have a firstString input field ', () => {
    const firstString = component.anagramForm.controls.firstString;
    expect(firstString.valid).toBeFalsy();
    expect(firstString.hasError('required')).toBeTruthy();
    expect(firstString.pristine).toBeTruthy();
  });

  it('should be throw pattern error after firstString field has entered numerical input values', () => {
    const word1 = component.anagramForm.controls.firstString;
    word1.setValue('abc1');
    expect(word1.hasError('pattern')).toBeTruthy();
    expect(word1.valid).toBeFalsy();
  });

  it('should have a secondString input field ', () => {
    const secondString = component.anagramForm.controls.secondString;
    expect(secondString.valid).toBeFalsy();
    expect(secondString.hasError('required')).toBeTruthy();
    expect(secondString.pristine).toBeTruthy();
  });

  it('should be throw pattern error after secondString field has entered numerical input values', () => {
    const secondString = component.anagramForm.controls.secondString;
    secondString.setValue('abc1');
    expect(secondString.hasError('pattern')).toBeTruthy();
    expect(secondString.valid).toBeFalsy();
  });
  
  it('should pass anagram check', () => {
    component.anagramForm.controls.firstString.setValue('cellar');
    component.anagramForm.controls.secondString.setValue('recall');
    expect(component.anagramForm.valid).toBeTruthy();
  });
  it('should fail anagram check', () => {
    component.anagramForm.controls.firstString.setValue('arm');
    component.anagramForm.controls.secondString.setValue('elbow');
    expect(component.anagramForm.valid).toBeTruthy();
  });
  
});