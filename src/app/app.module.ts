import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FinanceStocksComponent } from './components/finance-stocks/finance-stocks.component';
import { FinanceStockItemComponent } from './components/finance-stock-item/finance-stock-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FinanceStocksComponent,
    FinanceStockItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
