import { Component, OnInit } from '@angular/core';
import { ProductservService } from '../services/productserv.service';
import { Router } from '@angular/router';
@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  standalone: false,
})

// injected the API from services
export class ProductPageComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductservService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
    });
  }

  onSelectProduct(productId: Number): void {
    console.log('Navigating to product ID:', productId);
    this.router.navigate(['products', productId])
  }}