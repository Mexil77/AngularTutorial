import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  constructor() {}

  products = products;

  share() {
    window.alert('Producto Compartido');
  }

  onNotify() {
    window.alert('Seras Notificado cuando este producto este disponible');
  }
}
