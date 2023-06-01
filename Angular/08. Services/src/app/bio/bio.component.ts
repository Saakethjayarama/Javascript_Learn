import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css'],
})
export class BioComponent implements OnInit {
  student: any;
  constructor(studentService: StudentService) {
    this.student = studentService.getDetails();
  }

  ngOnInit(): void {}
}
