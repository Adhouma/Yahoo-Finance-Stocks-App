import { Component, OnInit } from '@angular/core';

import { FinanceStock } from '../../models/finance-stock';
import { FinanceStockService } from '../../services/finance-stock.service';

@Component({
  selector: 'app-finance-stocks',
  templateUrl: './finance-stocks.component.html',
  styleUrls: ['./finance-stocks.component.css'],
})
export class FinanceStocksComponent implements OnInit {

  financeStockList: FinanceStock[] = [];
  randomColor!: string;

  constructor(
    private financeStockService: FinanceStockService
  ) { }
  
  ngOnInit(): void {
    this.financeStockService.getAppleFinanceStocks();
    this.financeStockService.getAlphabetFinanceStocks();
    this.financeStockService.getMicrosoftFinanceStocks();
    this.financeStockService.getTeslaFinanceStocks();
    
    this.financeStockService.getFinanceStockUpdatedListener().subscribe((data: any) => {
      this.financeStockList = data;
    });
  }
  
}
