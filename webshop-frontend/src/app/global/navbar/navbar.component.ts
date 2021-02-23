import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartTotal = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartChangeed.subscribe(cartItems => {
      this.cartTotal = this.cartService.calculateSumOfCart();   
      console.log(cartItems);
    });
  }
}
