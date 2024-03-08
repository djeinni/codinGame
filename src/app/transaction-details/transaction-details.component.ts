import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'transaction-details',
  standalone: true,
  imports: [CommonModule],
  template: `

    <div id="fee">Fee : {{ fee | number | percent: '2.2-3' }}</div>

    <div id="amount">
      Amount : {{ amount | currency: currency:'symbol':'9.2-2' }}
    </div>

    <div id="time">
      Transaction : {{ timeOfTransaction | date: 'yyyy MM dd hh-mm-ss' }}
    </div>
  `,
})
export class TransactionDetailsComponent {
  @Input()
  public currency?: string;

  @Input()
  public timeOfTransaction?: Date;

  @Input()
  public amount?: number;

  @Input()
  public fee?: number;
}
