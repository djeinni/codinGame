import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterComponentComponent } from './voter-component.component';

describe('VoterComponentComponent', () => {
  let component: VoterComponentComponent;
  let fixture: ComponentFixture<VoterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoterComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
