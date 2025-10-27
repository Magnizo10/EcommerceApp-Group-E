import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductservService } from '../../services/productserv.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTerm = '';
  searchResults: any[] = [];
  showResults = false;

  constructor(
    private productService: ProductservService,
    private router: Router
  ) {}

  onSearch() {
    if (this.searchTerm.trim()) {
      this.productService.getProducts().subscribe(products => {
        this.searchResults = products.filter(product =>
          product.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
        this.showResults = true;
      });
    }
  }

  hideResults() {
    setTimeout(() => this.showResults = false, 200);
  }

  goToProduct(productId: number) {
    this.router.navigate(['/product', productId]);
    this.showResults = false;
  }
}