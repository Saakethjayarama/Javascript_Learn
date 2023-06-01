import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'property-binding',
  template: `
    <h2>This is from property binding component</h2>
    <input [id]="myId" type="text" value="cc" /><br />
    <input id="{{ myId }}" type="text" value="cc" /><br />

    <input id="{{ myId }}" [disabled]="isDisabled" type="text" value="cc" />
    even though disabled is set to false that doenst work so property binding is
    done<br />
    <input id="{{ myId }}" bind-disabled="isDisabled" type="text" value="cc" />
    Can also be done like this
  `,
})
export class PropertyBindingComponent implements OnInit {
  constructor() {}

  public myId = 'testId';
  public isDisabled = true;

  ngOnInit(): void {}
}

/**
 * * Atrribute vs property
 * * Attribute HTML
 * * Property DOM
 * * Attribute initializes DOM Properties and then they are done. Attribute values cannot change once they are initialized.
 * ! Limitation of interpolation
 * * Interpolation can only work with string values but at time we need to handle boolean values as well so we use property binding
 */
