import { Component, OnInit } from '@angular/core';
import { Item } from '../item/item.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemsInCart:Item[] = [];
  sumOfCart: number = 0;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.itemsInCart = this.cartService.getItemsFromCart();
    this.calculateSumOfCart();
  }

onEmptyCart() {
this.cartService.emptyCart();
this.itemsInCart = this.cartService.getItemsFromCart();
this.calculateSumOfCart();
}

onDeleteFromCart(i: number) {
this.cartService.deleteFromCart(i);
this.itemsInCart = this.cartService.getItemsFromCart();
this.calculateSumOfCart();
  }

  calculateSumOfCart() {
    this.sumOfCart = 0;
    this.itemsInCart.forEach(element => {
      this.sumOfCart += (Number)(element.price);
    });
    this.sumOfCart = (Number)(this.sumOfCart.toFixed(2));
  
  }

}
