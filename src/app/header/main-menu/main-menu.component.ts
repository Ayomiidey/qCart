import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
})
export class MainMenuComponent {
  mainMenu = [
    { label: 'Home', link: '' },
    { label: 'Products', link: '' },
    { label: 'About', link: '/about' },
    { label: 'Cart', link: '/cart' },
  ];
}
