import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Button } from './button';

@NgModule({
  declaration: [Button],
  imports: [CommonModule],
  exports: [Button],
})
export class ButtonModule {}
