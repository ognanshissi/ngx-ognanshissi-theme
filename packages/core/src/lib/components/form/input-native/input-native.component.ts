import { Component, ElementRef, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractControlValueAccessorComponent } from '../abstract-control-value.control';

/**
 * 
color
date
datetime-local
email
month
number
password
search
tel
text
time
url
week
 */
@Component({
  selector: `input[coreInput][type=text], input[coreInput][type=number], input[coreInput][type=email], input[coreInput][type=password], input[coreInput][type=search], input[coreInput][type=tel]`,
  standalone: true,
  template: ``,
  styleUrls: ['./input-native.component.scss'],
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent extends AbstractControlValueAccessorComponent<unknown> {
  constructor(private _element: ElementRef) {
    super();
    this._element.nativeElement.classList.add('form-input');
  }
}
