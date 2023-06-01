import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
})
export class NameComponent implements OnInit {
  name: String;
  constructor(studentService: StudentService) {
    this.name = studentService.getName();
  }

  ngOnInit(): void {}
}
