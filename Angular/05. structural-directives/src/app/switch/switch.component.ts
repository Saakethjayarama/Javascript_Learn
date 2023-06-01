import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  template: `
    <h2>Switch Component</h2>
    <div [ngSwitch]="level">
      <div *ngSwitchCase="'Beginner'">Beginner</div>
      <div *ngSwitchCase="'Intermediate'">Intermediate</div>
      <div *ngSwitchCase="'Pro'">Pro</div>
      <div *ngSwitchDefault="'Pro'">Level Unknown</div>
    </div>
  `,
})
export class SwitchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public level = 'Prows';
}
