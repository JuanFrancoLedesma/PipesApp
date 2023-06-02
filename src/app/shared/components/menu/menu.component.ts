import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  MenuItems!: MenuItem[];

  ngOnInit() {
    this.MenuItems = [
      {
        label: 'Pipes de Angular',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: 'products/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'products/numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'products/uncommon'
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        items: [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-cog',
            routerLink: 'custom'
          },
        ],
      },
    ];
  }
}
