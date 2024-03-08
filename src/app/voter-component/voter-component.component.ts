import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter-component',
  standalone: true,
  imports: [],
  templateUrl: './voter-component.component.html',
  styleUrl: './voter-component.component.css'
})
export class VoterComponentComponent {
  @Input() public question?: string;
  @Input() public yesAnswer?: string;
  @Input() public noAnswer?: string;

  @Output() public output = new EventEmitter<boolean>();

  public vote(vote: boolean): void {
    this.output.emit(vote);
  }
}
