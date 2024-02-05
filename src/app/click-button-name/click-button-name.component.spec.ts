import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickButtonNameComponent } from './click-button-name.component';

describe('ClickButtonNameComponent', () => {
  let component: ClickButtonNameComponent;
  let fixture: ComponentFixture<ClickButtonNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickButtonNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClickButtonNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
