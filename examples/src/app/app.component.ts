import { ButtonModule, FormFieldModule, InputComponent } from '@ambroisebazie/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, InputComponent, FormFieldModule, ButtonModule, FormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demoapp';

  username = 'Ambroise BAZIE';
}
