import { Component, ContentChild, HostBinding, Inject, Input, Optional } from '@angular/core';
import {
  AbstractFormFieldConfigOptions,
  CORE_FORM_FIELD_OPTIONS,
  FormFieldAppearanceOption,
} from '../configs/form-field.config';
import { AbstractControlValueAccessorComponent } from './../abstract-control-value.control';
import { FormErrorComponent } from './form-error.component';
import { FormHintComponent } from './form-hint.component';
import { LabelComponent } from './label.component';

@Component({
  selector: 'core-form-field',
  template: `
    <label class="block mb-1">
      <ng-content select="core-label"></ng-content>
    </label>
    <div class="input__container">
      <ng-content select="core-prefix"></ng-content>
      <ng-content></ng-content>
      <ng-content select="core-suffix"></ng-content>
    </div>
    <ng-content select="core-hint"></ng-content>
    <ng-content select="core-error"></ng-content>
  `,
})
export class FormFieldComponent {
  constructor(
    @Optional()
    @Inject(CORE_FORM_FIELD_OPTIONS)
    private _formFieldOptions: AbstractFormFieldConfigOptions
  ) {}
  @Input() appearance!: FormFieldAppearanceOption;

  static nextId = 0;

  @HostBinding('id') componentId = `core-form-field-id-${FormFieldComponent.nextId++}`;

  @ContentChild(LabelComponent)
  labelControl: LabelComponent | undefined;

  @ContentChild(FormErrorComponent)
  errorComponent: FormErrorComponent | undefined;

  @ContentChild(FormHintComponent)
  hintComponent: FormHintComponent | undefined;

  @ContentChild(AbstractControlValueAccessorComponent)
  formControl: AbstractControlValueAccessorComponent<unknown> | undefined;

  @HostBinding('class')
  get classes() {
    const appearance = this.appearance ?? this._formFieldOptions.appearance;
    return {
      'core-form-field__container__wrapper': true,
      'core-form-field__appearance-outline': appearance === 'outline',
      'core-form-field__appearance-fill': appearance === 'fill',
      'core-form-field__rouned-full': this._formFieldOptions.rounded === 'full',
      'core-form-field__rouned-large': this._formFieldOptions.rounded === 'large',
      'core-form-field__rouned-small': this._formFieldOptions.rounded === 'small',
      'core-form-field__rouned-none': this._formFieldOptions.rounded === undefined,
    };
  }
}
