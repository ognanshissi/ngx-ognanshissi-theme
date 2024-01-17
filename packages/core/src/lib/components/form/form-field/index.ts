import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconComponent } from '../../icon/icon.component';
import { FormErrorComponent } from './form-error.component';
import { FormFieldComponent } from './form-field.component';
import { FormHintComponent } from './form-hint.component';
import { FormPrefixDirective } from './form-prefix.directive';
import { FormSuffixDirective } from './form-suffix.directive';
import { LabelComponent } from './label.component';

const COMPONENTS = [
  FormFieldComponent,
  LabelComponent,
  FormErrorComponent,
  FormHintComponent,
  FormPrefixDirective,
  FormSuffixDirective,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, IconComponent],
})
export class FormFieldModule {}
