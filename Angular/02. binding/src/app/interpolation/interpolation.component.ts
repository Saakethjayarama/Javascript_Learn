import { Component, OnInit } from '@angular/core';

/**
 * * The syntax of property or expression within double curly braces is called as interpolation in angular
 * * By using interpolation we are asking angular to evaluate content inside curly braces and display the value when comp rendered in browser
 */

@Component({
  selector: 'app-interpolation',
  template: `
    <h2>This is from interpolation component</h2>
    Welcome {{ name }}
    <h2>{{ 2 + 2 }}</h2>
    <h2>{{ 'Welcome ' + name }}</h2>
    <h2>{{ name.length }}</h2>
    <h2>{{ name.toLowerCase() }}</h2>
    <h2>{{ greetUser() }}</h2>
    <h2>{{ 'a = 2 + 2' }}</h2>
    <h2>{{ 'window.location.href' }}</h2>
    <h2>{{ url }}</h2>
  `,
})
export class InterpolationComponent implements OnInit {
  public name = 'CC';
  public url = window.location.href;

  constructor() {}

  greetUser() {
    return 'Namaskara ' + this.name;
  }

  ngOnInit(): void {}
}

/**
 * ? What interpolation can do
 * * Display variable
 * * Evaluate expression
 * * Concatinate Strings
 * * Call functions
 * ! What interpolation cannot do
 * * Assignment
 * * access to global variables
 */
