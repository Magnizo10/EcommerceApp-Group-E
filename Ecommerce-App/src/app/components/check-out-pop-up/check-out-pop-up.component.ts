import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-check-out-pop-up',
  templateUrl: './check-out-pop-up.component.html',
  imports: [RouterModule],
  styleUrls: ['./check-out-pop-up.component.css'],
  standalone: true,
})
export class CheckOutPopUpComponent {
   
  constructor(private cart: CartService ,private router: Router) { } 
 

 //This will close the pop-up when the user clicks the close button
  ClosePopUp() {

    this.router.navigate(['/products']);
    this.cart.clearCart();
  } 
}
