import { Component, ContentChild, HostBinding, inject } from '@angular/core';
import { FormFieldConfigService } from '../../../services/form-field-config.service';
import { AB_FORM_FIELD_OPTIONS } from '../configs/form-field.config';
import { AbstractControlValueAccessorComponent } from './../abstract-control-value.control';
import { LabelComponent } from './label.component';

@Component({
  selector: 'core-form-field',
  template: `
    <div class="block">
      <label class="block">
        <ng-content select="core-label"></ng-content>
      </label>
      <ng-content></ng-content>
    </div>
  `,
  providers: [
    {
      provide: AB_FORM_FIELD_OPTIONS,
      useFactory: (formConfigService: FormFieldConfigService) => {
        return formConfigService.config;
      },
      deps: [FormFieldConfigService],
      multi: true,
    },
  ],
})
export class FormFieldComponent {
  static nextId = 0;

  private _formFieldConfig = inject(FormFieldConfigService);

  @HostBinding('id') componentId = `core-form-field-id-${FormFieldComponent.nextId++}`;

  @ContentChild(LabelComponent)
  labelControl: LabelComponent | undefined;

  @ContentChild(AbstractControlValueAccessorComponent)
  formControl: AbstractControlValueAccessorComponent<unknown> | undefined;

  @HostBinding('class')
  get classes() {
    return {
      'core-form-field__container__wrapper': true,
      'core-form-field__appearance-outline': this._formFieldConfig.config.appearance === 'outline',
      'core-form-field__appearance-fill': this._formFieldConfig.config.appearance === 'fill',
    };
  }
}
