import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root', // makes this service available everywhere in our app
})
export class ProductService {
  // ✅ Base URL of the Fake Store API
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  // ✅ Fetch all products
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // ✅ Fetch one product by ID
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // ✅ Fetch products in the same category
  getProductsByCategory(category: string): Observable<Product[]> {
    // ⚠️ You used `this.baseUrl` here, but your property is named `apiUrl`
    return this.http.get<Product[]>(`${this.apiUrl}/category/${category}`);
  }
}
