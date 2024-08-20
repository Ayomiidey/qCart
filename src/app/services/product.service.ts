import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.apiUrl);
  // }

  getProducts(): Observable<Product[]> {
    return this.http
      .get<{ products: Product[] }>(this.apiUrl)
      .pipe(map((response) => response.products));
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((products: Product[]) =>
        products.find((product) => product.id === id)
      )
    );
  }
}
