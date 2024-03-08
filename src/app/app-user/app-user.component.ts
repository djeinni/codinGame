import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-user.component.html',
  styles: ['
    .blue {
      color: blue
    }'
  ]
})
export class AppUserComponent {

  name = 'John Doe';
  highlight = true;
}
