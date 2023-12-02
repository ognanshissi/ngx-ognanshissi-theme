import { AbstractFormFieldConfigOptions } from './../../../configs/form-field.config';
import { AbstractControlValueAccessorComponent } from './../abstract-control-value.control';
import { Component, HostBinding, ContentChild, Inject } from '@angular/core';
import { LabelComponent } from './label.component';
import {
  AB_FORM_FIELD_OPTIONS,
  DefaultFormFieldConfigOptions,
} from '../../../configs/form-field.config';

@Component({
  selector: 'ab-form-field',
  template: `
    <div class="block">
      <label class="block">
        <ng-content select="ab-form-label"></ng-content>
      </label>
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [],
  providers: [
    {
      provide: AB_FORM_FIELD_OPTIONS,
      useClass: DefaultFormFieldConfigOptions,
      multi: true,
    },
  ],
})
export class FormFieldControlComponent {
  static nextId = 0;

  @HostBinding('id') componentId = `ab-form-field-id-${FormFieldControlComponent.nextId++}`;

  @ContentChild(LabelComponent)
  labelControl: LabelComponent | undefined;

  @ContentChild(AbstractControlValueAccessorComponent)
  formControl: AbstractControlValueAccessorComponent<unknown> | undefined;

  constructor(
    @Inject(AB_FORM_FIELD_OPTIONS) private formFieldConfig: AbstractFormFieldConfigOptions
  ) {}

  @HostBinding('class')
  get classes() {
    return {
      'ab-form-field__appearance-outline': this.formFieldConfig.appearance === 'outline',
    };
  }
}
