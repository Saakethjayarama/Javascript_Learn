import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h2>App Component</h2>
    <app-child
      (childEvent)="eventHandler($event)"
      (childEvent)="message = $event"
      [parentData]="name"
    ></app-child>
    <h2>{{ message + ' from parent' }}</h2> `,
})
export class AppComponent {
  public name = 'Saaketh';
  public age = 10;
  public message: string = '';

  eventHandler = (text: string) => {
    this.message = text;
  };
}
