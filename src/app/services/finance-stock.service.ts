import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { FinanceStock } from '../models/finance-stock';

@Injectable({
  providedIn: 'root'
})
export class FinanceStockService {

  // Tap https://cors-anywhere.herokuapp.com/ This API enables cross-origin requests to anywhere.
  private corsProxy = 'https://cors-anywhere.herokuapp.com/';
  private apiUrl = this.corsProxy + 'https://query1.finance.yahoo.com/v7/finance/quote?symbols=';

  private financeStockList: FinanceStock[] = [];
  private financeStocksUpdated = new Subject<FinanceStock[]>();

  constructor(
    private httpClient: HttpClient
    ) { }

  getFinanceStockUpdatedListener() {
    return this.financeStocksUpdated.asObservable();
  }

  getAppleFinanceStocks() {
    this.httpClient.get(this.apiUrl + 'AAPL').subscribe((data: any) => {
      const stock: FinanceStock = {
        name: data.quoteResponse.result[0].displayName,
        currentPrice: data.quoteResponse.result[0].regularMarketPrice,
        dailyHighPrice: data.quoteResponse.result[0].regularMarketDayHigh,
        dailyLowPrice: data.quoteResponse.result[0].regularMarketDayLow,
        weekHighPrice: data.quoteResponse.result[0].fiftyTwoWeekHigh,
        weekLowPrice: data.quoteResponse.result[0].fiftyTwoWeekLow,
      }

      this.financeStockList.push(stock);
      this.financeStocksUpdated.next(this.financeStockList);
    });
  }

  getAlphabetFinanceStocks() {
    this.httpClient.get(this.apiUrl + 'GOOG').subscribe((data: any) => {
      const stock: FinanceStock = {
        name: data.quoteResponse.result[0].displayName,
        currentPrice: data.quoteResponse.result[0].regularMarketPrice,
        dailyHighPrice: data.quoteResponse.result[0].regularMarketDayHigh,
        dailyLowPrice: data.quoteResponse.result[0].regularMarketDayLow,
        weekHighPrice: data.quoteResponse.result[0].fiftyTwoWeekHigh,
        weekLowPrice: data.quoteResponse.result[0].fiftyTwoWeekLow,
      }

      this.financeStockList.push(stock);
      this.financeStocksUpdated.next(this.financeStockList);
    });
  }

  getMicrosoftFinanceStocks() {
    this.httpClient.get(this.apiUrl + 'MSFT').subscribe((data: any) => {
      const stock: FinanceStock = {
        name: data.quoteResponse.result[0].displayName,
        currentPrice: data.quoteResponse.result[0].regularMarketPrice,
        dailyHighPrice: data.quoteResponse.result[0].regularMarketDayHigh,
        dailyLowPrice: data.quoteResponse.result[0].regularMarketDayLow,
        weekHighPrice: data.quoteResponse.result[0].fiftyTwoWeekHigh,
        weekLowPrice: data.quoteResponse.result[0].fiftyTwoWeekLow,
      }

      this.financeStockList.push(stock);
      this.financeStocksUpdated.next(this.financeStockList);
    });
  }

  getTeslaFinanceStocks() {
    this.httpClient.get(this.apiUrl + 'TSLA').subscribe((data: any) => {
      const stock: FinanceStock = {
        name: data.quoteResponse.result[0].displayName,
        currentPrice: data.quoteResponse.result[0].regularMarketPrice,
        dailyHighPrice: data.quoteResponse.result[0].regularMarketDayHigh,
        dailyLowPrice: data.quoteResponse.result[0].regularMarketDayLow,
        weekHighPrice: data.quoteResponse.result[0].fiftyTwoWeekHigh,
        weekLowPrice: data.quoteResponse.result[0].fiftyTwoWeekLow,
      }

      this.financeStockList.push(stock);
      this.financeStocksUpdated.next(this.financeStockList);
    });
  }
}
