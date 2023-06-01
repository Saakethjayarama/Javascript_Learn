import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>App Component</h2>
    {{ name }} <br />
    {{ name | uppercase }} <br />
    {{ name | lowercase }} <br />
    {{ name | titlecase }} <br />
    {{ name | slice: 11:-1 }} <br />
    {{ student | json }} <br />

    <h2>Numbers</h2>

    {{ gpa | number: '2.6-7' }} <br />
    @arg:= min no of integer digits . min number of decimal digits - max no of
    decimal digits<br />
    {{ 0.25 | percent }}<br />
    {{ 0.25 | currency }}<br />
    {{ 0.25 | currency: 'INR' }}<br />
    {{ 0.25 | currency: 'INR':'code' }}<br />

    <h2>Dates</h2>

    {{ dt }}<br />
    {{ dt | date: 'shortDate' }}<br />
    {{ dt | date: 'shortTime' }}<br />
  `,
})
export class AppComponent {
  title = 'pipes';
  name = `Welcome to coder's club`;
  student = {
    name: 'Saaketh',
    age: 20,
  };
  gpa = 7.56285;
  dt = new Date();
}
