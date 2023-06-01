import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `<h2>This is from Event Binding component</h2>
    <p>{{ greeting }}</p>
    <button (click)="handleClick($event)">Greet</button>
    <button (click)="greeting = 'Welcome Coder'">Greet</button> `,
})
export class EventBindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public greeting = '';

  handleClick(event: any): void {
    console.log(event);
    this.greeting = `Welcome to Coder's Club`;
  }
}
