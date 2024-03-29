import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { DonutComponent } from './pages/donut/donut.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'bars', component: BarsComponent },
      { path: 'double-bars', component: DoubleBarsComponent },
      { path: 'donut', component: DonutComponent },
      { path: 'donut-http', component: DonutHttpComponent },
      { path: '**', redirectTo: 'bars' }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
