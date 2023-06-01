import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <h2>This is from style binding Component</h2>
    <h2 [style.color]="'orange'">Coder's club</h2>
    <p>Conditional styling</p>
    <h2 [style.color]="hasError ? 'red' : 'green'">Coder's club</h2>
    <p>Styling based on the variables value as value</p>
    <h2 [style.color]="highlightedColor">Coder's club</h2>
    <p>Styling based on the properties defined in object</p>
    <h2 [style]="titleStyles">Coder's club</h2>
  `,
})
export class StyleBindingComponent implements OnInit {
  constructor() {}

  public hasError = false;
  public highlightedColor = 'blue';

  public titleStyles = {
    color: 'white',
    fontStyle: 'italic',
    fontFamily: 'sans-serif',
    backgroundColor: 'red',
  };

  ngOnInit(): void {}
}
