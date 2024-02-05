import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-currency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe-currency.component.html',
  styleUrl: './pipe-currency.component.css'
})
export class PipeCurrencyComponent {
  cost = '200.13';
}
