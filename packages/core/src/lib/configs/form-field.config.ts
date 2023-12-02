import { InjectionToken } from '@angular/core';

export type FormFieldAppearanceOption = 'fill' | 'outline';
export abstract class AbstractFormFieldConfigOptions {
  appearance!: FormFieldAppearanceOption;
}

export class DefaultFormFieldConfigOptions implements AbstractFormFieldConfigOptions {
  appearance!: FormFieldAppearanceOption;
}

export const AB_FORM_FIELD_OPTIONS = new InjectionToken<AbstractFormFieldConfigOptions>(
  'AB_FORM_FIELD_OPTIONS'
);
