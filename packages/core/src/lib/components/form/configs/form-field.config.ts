import { InjectionToken } from '@angular/core';

export type FormFieldAppearanceOption = 'fill' | 'outline';
export type FormFieldBorderRounded = 'small' | 'large' | 'full'; // 12px, 20px, 50%
export abstract class AbstractFormFieldConfigOptions {
  appearance!: FormFieldAppearanceOption;
  rounded?: FormFieldBorderRounded;
}

export class DefaultFormFieldConfigOptions implements AbstractFormFieldConfigOptions {
  appearance!: FormFieldAppearanceOption;
  rounded?: FormFieldBorderRounded;

  constructor() {
    this.appearance = 'fill';
    this.rounded = 'small';
  }
}

export const AB_FORM_FIELD_OPTIONS = new InjectionToken<AbstractFormFieldConfigOptions>(
  'AB_FORM_FIELD_OPTIONS'
);
