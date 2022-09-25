import { TestBed } from '@angular/core/testing';

import { FinanceStockService } from './finance-stock.service';

describe('StockPriceService', () => {
  let service: FinanceStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanceStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
