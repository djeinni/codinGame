import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCurrencyComponent } from './pipe-currency.component';

describe('PipeCurrencyComponent', () => {
  let component: PipeCurrencyComponent;
  let fixture: ComponentFixture<PipeCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeCurrencyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
