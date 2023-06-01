import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `<div>
    <h2>From two way binding component</h2>
    <input
      type="text"
      name="username"
      placeholder="username"
      [(ngModel)]="name"
    />
    {{ name }}<br /><br />
    <input
      type="password"
      name="password"
      placeholder="password"
      [(ngModel)]="password"
    />
    {{ password }}
  </div>`,
})
export class TwoWayBindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public name = 'Saaketh';
  public password = 'Saaketh';
}
