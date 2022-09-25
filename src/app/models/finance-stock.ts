export interface FinanceStock {
  name: string; // displayName
  currentPrice: string; // regularMarketPrice
  dailyHighPrice: number; // regularMarketDayHigh
  dailyLowPrice: number; // regularMarketDayLow
  weekHighPrice: number; // fiftyTwoWeekHigh
  weekLowPrice: number; // fiftyTwoWeekLow
}