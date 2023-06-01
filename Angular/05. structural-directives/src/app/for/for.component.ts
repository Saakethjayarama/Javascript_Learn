import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  template: `
    <h2>For Component</h2>
    <div
      *ngFor="
        let fruit of fruits;
        index as i;
        last as l;
        first as f;
        odd as o;
        even as e
      "
    >
      <p>
        {{ fruit }} index {{ i }} first: {{ f }} last: {{ l }} Odd:
        {{ o }} even:{{ e }}
      </p>
    </div>
  `,
})
export class ForComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public fruits = ['Apple', 'Banana', 'Pineapple', 'Pomegranate'];
}
