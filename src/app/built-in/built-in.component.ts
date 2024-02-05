import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './built-in.component.html',
  styleUrl: './built-in.component.css'


})

export class BuiltInComponent {
  name = 'John Doe';
  highlight = true;
}
