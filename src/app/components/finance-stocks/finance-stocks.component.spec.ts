import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceStocksComponent } from './finance-stocks.component';

describe('FinanceStocksComponent', () => {
  let component: FinanceStocksComponent;
  let fixture: ComponentFixture<FinanceStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceStocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
