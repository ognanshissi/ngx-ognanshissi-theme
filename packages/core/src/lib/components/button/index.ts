import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AbAnchor, AbButton } from './button';

@NgModule({
  declaration: [AbButton, AbAnchor],
  imports: [CommonModule],
  exports: [AbButton, AbAnchor],
})
export class ButtonModule {}
