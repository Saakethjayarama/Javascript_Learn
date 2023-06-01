import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
    <h2>This is from Class Binding Component</h2>
    <h2 class="text-success">Coder's Club</h2>
    <h2 class="text-danger">Coder's Club</h2>
    <h2 class="text-special">Coder's Club</h2>

    <p>set Class based as of the value of variable</p>
    <h2 [class]="success">Coder's Club</h2>

    <p>Toggle a class based on value of a variable</p>
    <h2 [class.text-success]="isSuccess">Coder's Club</h2>

    <p>Set multiple classes based on some complex condition</p>
    <h2 [ngClass]="messageClasses">Coder's Club</h2>
  `,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class ClassBindingComponent implements OnInit {
  constructor() {}

  // set class as of the value of variable
  public success = 'text-success';

  // class based on a condition
  public isSuccess = true;

  //classes based on the conditions
  public hasError = false;
  public isSpecial = true;

  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };

  ngOnInit(): void {}
}
