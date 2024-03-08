import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-click-button-name',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './click-button-name.component.html',
  styleUrl: './click-button-name.component.css'
}) <app-user [user]="user" 
export class ClickButtonNameComponent {
  name = 'John Doe';
  show = true;

  onClick() {
    this.show = !this.show;
  }
}
