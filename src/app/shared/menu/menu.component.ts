import { Component } from '@angular/core';


interface MenuItem {
  ruta: string;
  nombre: string;
}



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuItems: MenuItem[] = [
    {
      ruta: './graficas/bars',
      nombre: 'Bars'
    },
    {
      ruta: './graficas/double-bars',
      nombre: 'Double Bars'
    },
    {
      ruta: './graficas/donut',
      nombre: 'Donut'
    },
    {
      ruta: './graficas/donut-http',
      nombre: 'Donut Http'
    }
  
  ]
  

}
