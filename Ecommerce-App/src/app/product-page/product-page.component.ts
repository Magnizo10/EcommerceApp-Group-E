import { Component, OnInit } from '@angular/core';
import { ProductservService } from '../services/productserv.service';
@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  standalone: false,
})

// injected the API from services
export class ProductPageComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductservService) {}
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
   
    console.log('here is the id of passed product', productId);
  }
}
