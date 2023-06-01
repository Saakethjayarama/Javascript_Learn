import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-test', // as element
  // selector: '.app-test', // as class
  selector: '[app-test]', // as attribute
  // templateUrl: './test.component.html', // if you dont want to have template imported from external file. external file always overwrites inline template
  template: ` <div>This is inline html template</div> `,
  // styleUrls: ['./test.component.css'], // The same is with styles as well
  styles: [
    `
      div {
        color: red;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
