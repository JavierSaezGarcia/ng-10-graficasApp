import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: []
})
export class BarsComponent {
  

  covidData: ChartData<'bar'> = {
    labels: ['10-20','20-30', '30-40', '40-50', '50-60', '>60'],
    datasets: [
      {
        data: [50, 100, 200, 300, 400, 500],
        label: 'Hombres',
      },
      {
        data: [20,50, 250, 30, 450, 200],
        label: 'Mujeres',
      },
    ],
  };


}
