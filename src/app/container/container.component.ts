import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent implements OnInit {
  products: Product[];
  filteredProduct: Product[];
  private productService = inject(ProductService);
  searchTerm: string = '';
  sortOrder: string = '';

  constructor() {
    (this.products = []), (this.filteredProduct = []);
  }

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct() {
    this.productService.getProducts().subscribe({
      next: (res: Product[]) => {
        this.products = this.filteredProduct = res;
        console.log(this.products, 'all');
        console.log(this.filteredProduct, 'filtered');
      },
      complete: () => console.log('complete'),
      error: (err) => console.log(err),
    });
  }

  onSearch(value: string): void {
    const searchValue = value.toLowerCase();

    if (searchValue === '') {
      this.products = this.filteredProduct;
    } else {
      this.products = this.filteredProduct.filter((c) =>
        c.title.toLowerCase().startsWith(searchValue)
      );
    }
  }

  sortProducts(sortValue: string) {
    this.sortOrder = sortValue;

    if (this.sortOrder === 'priceLowHigh') {
      this.filteredProduct.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'priceHighLow') {
      this.filteredProduct.sort((a, b) => b.price - a.price);
    }
  }
}

//   filterProducts(): void {
//     if (this.searchTerm) {
//       const term = this.searchTerm.toLowerCase();
//       this.filteredProducts = this.products.filter((product) =>
//         product.title.toLowerCase().startsWith(term)
//       );
//     } else {
//       this.filteredProducts = this.products;
//     }
//   }
