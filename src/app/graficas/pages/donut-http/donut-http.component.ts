import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';


@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styles: [
  ]
})
export class DonutHttpComponent implements OnInit {
  

  public doughnutChartLabels: string[] =  [];/* [ 'Dascargas', 'Ventas en tienda', 'Venta online' ] */;
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {data: []}
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  constructor(private graficasService: GraficasService){};

  ngOnInit(): void {

    
    this.graficasService
      .getUsuariosRedesSocialesDonaData()
      .subscribe(({ labels, datasets }) => {
        // console.log(data);
        this.doughnutChartData = { labels, datasets };
      });
  }

  

 

}
