import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormFieldComponent } from './form-field.component';
import { LabelComponent } from './label.component';

@NgModule({
  declarations: [FormFieldComponent, LabelComponent],
  exports: [FormFieldComponent, LabelComponent],
  imports: [CommonModule],
})
export class FormFieldModule {}
