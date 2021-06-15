import { Component, OnInit } from '@angular/core';
import Stock from '../../shared/model/stock.models';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dash-page',
  templateUrl: './dash-page.component.html',
  styleUrls: ['./dash-page.component.css']
})
export class DashPageComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private dashboarService: DashboardService) { }

  ngOnInit(): void {

    this.fetchStocks();
  }

  async fetchStocks(): Promise<void>{
    this.stocks = await this.dashboarService.getStocks();
    console.log(this.stocks);
  }

}
