import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-description-page',
  templateUrl: './description-page.component.html',
  styleUrls: ['./description-page.component.css']
})
export class DescriptionPageComponent {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('🟢 ID from route:', id);

    if (id) {
      this.productService.getProductById(Number(id)).subscribe({
        next: (data) => {
          console.log('🟢 Product data from API:', data);
          this.product = data;
        },
        error: (err) => console.error('🔴 Error fetching product:', err)
      });
    } else {
      console.log('⚠️ No ID found in the route.');
    }
  }

  addToCart(product: Product) {
    alert(`${product.title} added to cart!`);
  }
}
