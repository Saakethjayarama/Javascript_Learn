import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>Child Component</h2>
    <h2>{{ 'Hello ' + name }}</h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input('parentData')
  public name: any;

  @Output() public childEvent = new EventEmitter();
  fireEvent() {
    this.childEvent.emit('You are 20 years old');
  }
}
