import { Component, OnInit, forwardRef } from '@angular/core';
import { AbstractControlValueAccessorComponent } from '../abstract-control-value.control';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ab-input-text',
  standalone: true,
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent extends AbstractControlValueAccessorComponent implements OnInit {

  ngOnInit(): void {
      console.log('Hello this is input')
  }
}
