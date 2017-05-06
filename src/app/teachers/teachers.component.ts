import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialog , MdDialogRef } from '@angular/material';

import { DialogComponent } from '../dialog.component';
import { TeacherService } from './teachers.service';
import { Student } from '../students/students.model';
import { Teacher } from './teachers.model';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  teacherForm: FormGroup;
  students: Student[] = [];
  dataSaved: Teacher;

  constructor(private fb: FormBuilder , private service: TeacherService , public dialog: MdDialog) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    const id = Math.round( Math.random() * 100 );
    this.teacherForm = this.fb.group({
      Id: [id, Validators.required ],
      Name: ['', Validators.required ],
      School: ['', Validators.required ]
    });
  }

  updateStudents(students) {
    this.students = students;
    console.log(this.students);
  }

  onSubmit() {
    const teacher: Teacher = this.teacherForm.value;
    teacher.Students = this.students;
    const message = this.service.save(teacher);
    console.log(message);
    let dialogRef: MdDialogRef<DialogComponent>;
    dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.message = message;
    dialogRef.afterClosed().subscribe(result => {
      this.dataSaved = teacher;
    });
  }

  hasError(control) {
    return control.errors && (control.dirty || control.touched);
  }

}
