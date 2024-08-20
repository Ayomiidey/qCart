import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService);
  product: Product | undefined;
  quantity: number = 1;

  ngOnInit(): void {
    this.product = {} as Product;
    const productId = Number(this.route.snapshot.params['id']);
    this.productService.getProductById(productId).subscribe((product) => {
      this.product = product;
    });
  }

  decrease(): void {
    this.quantity--;
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
