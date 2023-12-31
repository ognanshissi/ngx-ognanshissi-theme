import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'core-label',
  template: `<ng-content></ng-content>`,
})
export class LabelComponent {
  constructor(private _element: ElementRef<LabelComponent>) {
    console.log(this._element);
  }
}
