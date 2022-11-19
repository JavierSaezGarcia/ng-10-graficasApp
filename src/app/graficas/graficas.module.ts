import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { GraficaBarComponent } from './components/grafica-bar/grafica-bar.component';
import { DonutComponent } from './pages/donut/donut.component';
import { NgChartsModule } from 'ng2-charts';

   


@NgModule({
  declarations: [
    BarsComponent,
    DoubleBarsComponent,
    DonutHttpComponent,
    GraficaBarComponent,
    DonutComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    NgChartsModule
  ]
})
export class GraficasModule { }
