import { CommonModule } from '@angular/common';
import { Button } from '.';

@NgModule({
  declaration: [Button],
  imports: [CommonModule],
  exports: [Button],
})
export class ButtonModule {}
