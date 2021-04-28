import { ComponentFixture, TestBed, async} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AnagramTesterComponent } from './anagram-tester.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AnagramTesterComponent', () => {
  let component: AnagramTesterComponent;
  let fixture: ComponentFixture<AnagramTesterComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnagramTesterComponent],
      imports: [ReactiveFormsModule,RouterTestingModule]
    }).compileComponents();
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
  it('should have a secondString input field ', () => {
    const secondString = component.anagramForm.controls.secondString;
    expect(secondString.valid).toBeFalsy();
    expect(secondString.hasError('required')).toBeTruthy();
    expect(secondString.pristine).toBeTruthy();
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
  it('should pass anagram check 2', () => {
    component.anagramForm.controls.firstString.setValue('listen');
    component.anagramForm.controls.secondString.setValue('silent');
    expect(component.anagramForm.valid).toBeTruthy();
  });
  it('should fail anagram check 2', () => {
    component.anagramForm.controls.firstString.setValue('right');
    component.anagramForm.controls.secondString.setValue('left');
    expect(component.anagramForm.valid).toBeTruthy();
  });
  it('should pass anagram check 3', () => {
    component.anagramForm.controls.firstString.setValue('abc');
    component.anagramForm.controls.secondString.setValue('cab');
    expect(component.anagramForm.valid).toBeTruthy();
  });
  it('should fail anagram check 3', () => {
    component.anagramForm.controls.firstString.setValue('cone');
    component.anagramForm.controls.secondString.setValue('gone');
    expect(component.anagramForm.valid).toBeTruthy();
  });
  it('should pass anagram check 4', () => {
    component.anagramForm.controls.firstString.setValue('night');
    component.anagramForm.controls.secondString.setValue('thing');
    expect(component.anagramForm.valid).toBeTruthy();
  });
  it('should fail anagram check 4', () => {
    component.anagramForm.controls.firstString.setValue('less');
    component.anagramForm.controls.secondString.setValue('more');
    expect(component.anagramForm.valid).toBeTruthy();
  });
  it('should pass anagram check 5', () => {
    component.anagramForm.controls.firstString.setValue('who');
    component.anagramForm.controls.secondString.setValue('how');
    expect(component.anagramForm.valid).toBeTruthy();
  });
  it('should fail anagram check 5', () => {
    component.anagramForm.controls.firstString.setValue('get');
    component.anagramForm.controls.secondString.setValue('tag');
    expect(component.anagramForm.valid).toBeTruthy();
  });
});