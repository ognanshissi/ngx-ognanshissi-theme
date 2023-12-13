import { Inject, Injectable } from '@angular/core';
import {
  AbstractFormFieldConfigOptions,
  CORE_FORM_FIELD_OPTIONS,
} from '../components/form/configs/form-field.config';

@Injectable({ providedIn: 'root' })
export class FormFieldConfigService {
  constructor(
    @Inject(CORE_FORM_FIELD_OPTIONS) private formFieldConfigOptions: AbstractFormFieldConfigOptions
  ) {}

  get config() {
    return this.formFieldConfigOptions;
  }
}
