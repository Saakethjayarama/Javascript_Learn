import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  template: `
    <input type="text" #tbox />
    <button (click)="handleClick(tbox.value)">Submit</button>
    <p>{{ greetings }}</p>
  `,
})
export class TemplateRefComponent implements OnInit {
  constructor() {}
  public greetings: string = '';

  ngOnInit(): void {}

  handleClick(value: string): void {
    if (value !== '') this.greetings = `Welcome ${value}`;
    else this.greetings = '';
  }
}
