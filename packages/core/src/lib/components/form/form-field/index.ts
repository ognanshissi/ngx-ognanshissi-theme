import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormErrorComponent } from './form-error.component';
import { FormFieldComponent } from './form-field.component';
import { FormHintComponent } from './form-hint.component';
import { LabelComponent } from './label.component';

@NgModule({
  declarations: [FormFieldComponent, LabelComponent, FormErrorComponent, FormHintComponent],
  exports: [FormFieldComponent, LabelComponent, FormErrorComponent, FormHintComponent],
  imports: [CommonModule],
})
export class FormFieldModule {}
