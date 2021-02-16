import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  itemsInCart: {

      imgSrc: string;
      title: string;
      price: string;
      category: string;
  }[] = [];


  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.itemsInCart = this.cartService.cartItems;
  }

onEmptyCart() {

this.cartService.cartItems=[];
this.itemsInCart = this.cartService.cartItems;
}

onDeleteFromCart(i: number) {
this.cartService.cartItems.splice(i,1);
this.itemsInCart = this.cartService.cartItems;
}

}
