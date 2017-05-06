import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Student } from './students.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  private studentForm: FormGroup;
  @Input() students: Student[] = [];
  @Output() studentsUpdated = new EventEmitter<Student[]>();

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.studentForm = this.fb.group({
      Name: ['', Validators.required ],
      NumFriends: ['']
    });
  }

  onSubmit() {
    this.students.push(this.studentForm.value);
    this.studentsUpdated.emit(this.students);
  }

  deleteStudent(student) {
    const index = this.students.indexOf(student);
    if (index > -1) {
      this.students.splice(index, 1);
      this.studentsUpdated.emit(this.students);
    }
  }

  hasError(control) {
    return control.errors && (control.dirty || control.touched);
  }

}
