import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductservService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }


  // Method to fetch products from the API
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Method to fetch a single product by ID
  getProductById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  // Method to fetch products by category
  getProductsByCategory(category: string): Observable<any[]> {
    const url = `${this.apiUrl}/category/${category}`;
    return this.http.get<any[]>(url);
  }
  // Method to fetch all categories
  getAllCategories(): Observable<string[]> {
    const url = `${this.apiUrl}/categories`;
    return this.http.get<string[]>(url);
  }

}
