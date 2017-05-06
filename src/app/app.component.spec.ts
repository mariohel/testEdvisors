import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule , FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'hammerjs';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';

import { TeacherService } from './teachers/teachers.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot(),
        BrowserAnimationsModule ,
        ReactiveFormsModule ,
        FormsModule
      ],
      declarations: [
        AppComponent,
        DialogComponent,
        TeachersComponent,
        StudentsComponent
      ],
      providers: [TeacherService],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Test'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Test');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Test');
  }));
});
