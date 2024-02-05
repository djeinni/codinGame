import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-name-length',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './name-length.component.html',
  styleUrl: './name-length.component.css'
})
export class NameLengthComponent {
  names = ['Theresa', 'Morris', 'Duane', 'TAZ'];
}
