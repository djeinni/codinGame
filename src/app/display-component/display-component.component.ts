import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VoterComponentComponent } from '../voter-component/voter-component.component';

@Component({
  selector: 'app-display-component',
  standalone: true,
  imports: [CommonModule, VoterComponentComponent],
  templateUrl: './display-component.component.html',
  styleUrl: './display-component.component.css'
})
export class DisplayComponentComponent {
  public question = "Too easy?";
  public yesAnswer = "Yes";
  public noAnswer = "No";
  public answer: string = 'Yes';

  setVote(event: boolean) {
    return (this.answer = event ? this.yesAnswer : this.noAnswer);
  }
}
