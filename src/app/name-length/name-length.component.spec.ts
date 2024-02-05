import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameLengthComponent } from './name-length.component';

describe('NameLengthComponent', () => {
  let component: NameLengthComponent;
  let fixture: ComponentFixture<NameLengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameLengthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NameLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
