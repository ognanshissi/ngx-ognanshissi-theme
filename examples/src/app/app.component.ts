import { ButtonModule, FormFieldModule, InputComponent } from '@ambroisebazie/core';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    InputComponent,
    FormFieldModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demoapp';

  username = 'Ambroise BAZIE';

  lastName = 'Hello world';
}
