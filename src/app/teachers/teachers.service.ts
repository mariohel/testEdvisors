import { Injectable } from '@angular/core';
import { Teacher } from './teachers.model';

@Injectable()
export class TeacherService {

  teachers: Teacher[] = [];
  constructor() { }

  save(teacher: Teacher) {
    this.teachers.push(teacher);
    return 'Teacher and his Students are saved Successfully';
  }

}
