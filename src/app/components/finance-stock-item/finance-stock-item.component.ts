import { Component, Input, OnInit } from '@angular/core';

import { FinanceStock } from '../../models/finance-stock';

@Component({
  selector: 'app-finance-stock-item',
  templateUrl: './finance-stock-item.component.html',
  styleUrls: ['./finance-stock-item.component.css']
})
export class FinanceStockItemComponent implements OnInit {

  @Input() financeStock!: FinanceStock;

  constructor() { }

  ngOnInit(): void { }
  
}
