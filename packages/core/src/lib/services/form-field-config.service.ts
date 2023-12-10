import { Inject, Injectable } from '@angular/core';
import {
  AB_FORM_FIELD_OPTIONS,
  AbstractFormFieldConfigOptions,
  DefaultFormFieldConfigOptions,
} from '../components/form/configs/form-field.config';

@Injectable({ providedIn: 'root' })
export class FormFieldConfigService {
  defaultFormConfig = new DefaultFormFieldConfigOptions();

  constructor(
    @Inject(AB_FORM_FIELD_OPTIONS) private formFieldConfigOptions: AbstractFormFieldConfigOptions
  ) {}

  get config() {
    return this.formFieldConfigOptions ?? this.defaultFormConfig;
  }
}
