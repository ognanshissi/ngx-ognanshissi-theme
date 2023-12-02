import { AfterViewInit, Component, ContentChild, HostBinding, Inject } from '@angular/core';
import {
  AB_FORM_FIELD_OPTIONS,
  DefaultFormFieldConfigOptions,
} from '../../../configs/form-field.config';
import { AbstractFormFieldConfigOptions } from './../../../configs/form-field.config';
import { AbstractControlValueAccessorComponent } from './../abstract-control-value.control';
import { LabelComponent } from './label.component';

@Component({
  selector: 'ab-form-field',
  template: `
    <div class="block">
      <label class="block">
        <ng-content select="ab-label"></ng-content>
      </label>
      <ng-content></ng-content>
    </div>
  `,
  providers: [
    {
      provide: AB_FORM_FIELD_OPTIONS,
      useClass: DefaultFormFieldConfigOptions,
      multi: true,
    },
  ],
})
export class FormFieldComponent implements AfterViewInit {
  static nextId = 0;

  @HostBinding('id') componentId = `ab-form-field-id-${FormFieldComponent.nextId++}`;

  @ContentChild(LabelComponent)
  labelControl: LabelComponent | undefined;

  @ContentChild(AbstractControlValueAccessorComponent)
  formControl: AbstractControlValueAccessorComponent<unknown> | undefined;

  constructor(
    @Inject(AB_FORM_FIELD_OPTIONS) private formFieldConfig: AbstractFormFieldConfigOptions
  ) {
    console.log(formFieldConfig);
  }

  ngAfterViewInit(): void {
    console.log(this.formControl);
  }

  @HostBinding('class')
  get classes() {
    return {
      'ab-form-field__container': true,
      'ab-form-field__appearance-outline': this.formFieldConfig.appearance === 'outline',
      'ab-form-field__appearance-fill': this.formFieldConfig.appearance === 'fill',
    };
  }
}
