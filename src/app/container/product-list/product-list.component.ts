import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  // products: Product[] = [];
  // filteredProducts: Product[] = [];
  // searchTerm: string = '';
  // sortOrder: string = ' ';
  @Input() listResult: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log(this.listResult);
  }

  //THIS IS NOT NEEDED
  // Filter(event: Event): void {
  //   let searchTerm = (event.target as HTMLInputElement).value;
  //   searchTerm = searchTerm.toLowerCase();

  //   this.filteredProducts = this.products.filter((products) =>
  //     products.title.toLowerCase().includes(searchTerm)
  //   );
  // }
}
