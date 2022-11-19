import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-bar',
  templateUrl: './grafica-bar.component.html',
  styles: [
  ]
})


export class GraficaBarComponent implements OnInit{ 
  
  

  constructor(){}

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() horizontal: boolean = false;
  @Input() inputLabels!: any[] | unknown[] | undefined;
  @Input() inputDatasets!: ChartDataset<any, any>[];

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {}
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };
  public barChartType: ChartType = 'bar'; // tipos de grafica
  

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }

   
  ngOnInit(): void {
    
    if (this.horizontal) {
      this.barChartOptions!.indexAxis = 'y'; // angular confía en mí siempre vas a tener algo ahí!
    }
    this.barChartData.datasets = this.inputDatasets;
    this.barChartData.labels = this.inputLabels;
    
    
  }

  



}

