import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root' //makes this service available everywhere in your 
})
export class ProductService {

// Base URL of the Fake Store Api

private baseUrl = 'https://fakestoreapi.com/products';

  
//HttpClient helps us make GET,POST,PUT,DELETE request
constructor(private http: HttpClient) { }

//Fetch all products

getAllProducts(): Observable<Product[]>{
  return this.http.get<Product[]>(this.baseUrl)
}

//Fetch one product by Id

getProductById(id: number): Observable<Product>{
  return this.http.get<Product>('$this.baseUrl}/${id}');
}

//Fetch product in the same category

getProductsByCategory(category: string): Observable<Product[]>{
  return this.http.get<Product[]>('${this.baseUrl}/category/${category}');
}

}
