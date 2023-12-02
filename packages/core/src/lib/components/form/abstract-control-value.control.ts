import { Component, Input, booleanAttribute } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  template: '',
})
export class AbstractControlValueAccessorComponent<T = any> implements ControlValueAccessor {
  @Input()
  id!: string;

  @Input({ transform: booleanAttribute }) disabled!: boolean;
  private _value!: T;

  get value() {
    return this._value;
  }

  private onTouched!: () => void;

  private onChange!: (value: T) => void;

  set value(t: T) {
    this._value = t;
    this.onTouched();
    this.onChange(t);
  }

  writeValue(obj: any): void {
    if (obj) {
      this.value = obj;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
