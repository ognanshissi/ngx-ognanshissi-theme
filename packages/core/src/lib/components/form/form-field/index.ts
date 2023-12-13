import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormErrorComponent } from './form-error.component';
import { FormFieldComponent } from './form-field.component';
import { FormHintComponent } from './form-hint.component';
import { CoreFormPrefixComponent } from './form-prefix.component';
import { LabelComponent } from './label.component';

const COMPONENTS = [
  FormFieldComponent,
  CoreFormPrefixComponent,
  LabelComponent,
  FormErrorComponent,
  FormHintComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule],
})
export class FormFieldModule {}
