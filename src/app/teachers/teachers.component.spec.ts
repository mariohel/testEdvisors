import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule, MdDialog , MdDialogRef } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule , FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DialogComponent } from '../dialog.component';
import { TeachersComponent } from './teachers.component';
import { StudentsComponent } from '../students/students.component';
import { TeacherService } from './teachers.service';

describe('TeachersComponent', () => {
  let component: TeachersComponent;
  let fixture: ComponentFixture<TeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot(),
        BrowserAnimationsModule ,
        ReactiveFormsModule ,
        FormsModule
      ],
      declarations: [
        DialogComponent,
        TeachersComponent,
       StudentsComponent
      ],
      providers: [TeacherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
