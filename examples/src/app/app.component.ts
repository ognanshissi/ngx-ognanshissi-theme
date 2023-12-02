import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FormFieldComponent, InputComponent, LabelComponent } from '@ambroisebazie/core';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FormFieldComponent, InputComponent, LabelComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demoapp';
}
