import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service.service';
import { Products } from '../../models/products';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Products[] = [];
  filteredProducts: Products[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  filterProducts(): void {
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      this.filteredProducts = this.products.filter((product) =>
        product.title.toLowerCase().startsWith(term)
      );
    } else {
      this.filteredProducts = this.products;
    }
  }

  // Filter(event: Event): void {
  //   let searchTerm = (event.target as HTMLInputElement).value;
  //   searchTerm = searchTerm.toLowerCase();

  //   this.filteredProducts = this.products.filter((products) =>
  //     products.title.toLowerCase().includes(searchTerm)
  //   );
  // }
}
