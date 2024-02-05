import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-component',
  standalone: true,
  imports: [],
  templateUrl: './label-component.component.html',
  styleUrl: './label-component.component.css'
})
export class LabelComponentComponent {
  @Input() color: string = '';
  @Input() label: string = '';
}
