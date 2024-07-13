import { Component } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css',
})
export class TopMenuComponent {
  topMenu = [
    { label: 'Help', link: '' },
    { label: 'Exhange & Return', link: '' },
    { label: 'Order Tracker', link: '' },
    { label: 'SignUp & Login', link: '' },
  ];
}
