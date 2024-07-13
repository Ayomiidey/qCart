import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../models/products';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Products[]> {
    return this.http
      .get<{ products: Products[] }>(this.apiUrl)
      .pipe(map((response) => response.products));

    // getProducts(): Observable<Products[]> {
    //   return this.http.get<Products[]>(this.apiUrl);
  }
}
