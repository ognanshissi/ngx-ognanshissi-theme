import { Component, OnInit, forwardRef } from '@angular/core';
import { AbstractControlValueAccessorComponent } from '../abstract-control-value.control';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ab-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent extends AbstractControlValueAccessorComponent implements OnInit {}
