import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceStockItemComponent } from './finance-stock-item.component';

describe('FinanceStockItemComponent', () => {
  let component: FinanceStockItemComponent;
  let fixture: ComponentFixture<FinanceStockItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceStockItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceStockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
