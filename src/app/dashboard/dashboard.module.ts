import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashPageComponent } from './dash-page/dash-page.component';
import { StockCardComponent } from './stock-card/stock-card.component';


@NgModule({
  declarations: [

    DashPageComponent,
     StockCardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],

  exports: [
    DashPageComponent,
  ],

})
export class DashboardModule { }
