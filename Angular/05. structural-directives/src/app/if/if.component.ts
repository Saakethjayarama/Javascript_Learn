import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  template: `<div>
    <h2>If Component</h2>
    // The below element is conditionally rendered
    <h3 *ngIf="true">Coder's Club direct true</h3>
    <h3 *ngIf="isShown">Coder's Club using variable</h3>
    // If else
    <h3 *ngIf="isShown; else elseBlock">Coder's Club in if else</h3>
    <ng-template #elseBlock>
      <h3>Name is hiddem if else</h3>
    </ng-template>

    // Another way

    <div *ngIf="isShown; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>Coder's Club</h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>Coder's Club</h2>
    </ng-template>
  </div>`,
})
export class IfComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public isShown = true;
}
