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

 //constructor runs when angular creates this component
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  )
  {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.productService.getProductById(Number(id)).subscribe((data)=>{
       this.product= data;
    })
    };
  }
  addToCart(product: Product){
    alert('${product.title} added to cart!');
  }
}
