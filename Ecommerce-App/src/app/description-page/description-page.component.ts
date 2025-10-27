import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-description-page',
  templateUrl: './description-page.component.html',
  styleUrls: ['./description-page.component.css'],
})
export class DescriptionPageComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
  const productId = this.route.snapshot.paramMap.get('id');

  if (productId) {
    this.productService.getProductById(+productId).subscribe({
      next: (data) => {
        this.product = data; // already a single product
        console.log('Loaded product:', this.product);
      },
      error: (err) => console.error('Error fetching product:', err),
    });
  }
}


  addToCart(product: any): void {
    console.log('Added to cart:', product);
    // (You can later replace this with actual cart logic)
  }
}
