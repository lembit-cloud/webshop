import { Component, OnInit } from '@angular/core';
import { Item } from '../item/item.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemsInCart: {cartItem: Item, count: number} [] = [];
  // itemsInCart:Item[] = [];
  sumOfCart: number = 0;
  countOfCart: number = 0;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.itemsInCart = this.cartService.getItemsFromCart();
    this.sumOfCart = this.cartService.calculateSumOfCart();
    this.countOfCart = this.cartService.calculateCartCount();
  }

onEmptyCart() {
this.cartService.emptyCart();
this.itemsInCart = this.cartService.getItemsFromCart();
this.sumOfCart = this.cartService.calculateSumOfCart();
this.countOfCart = this.cartService.calculateCartCount();
}

onDeleteFromCart(i: number) {
this.cartService.deleteFromCart(i);
this.itemsInCart = this.cartService.getItemsFromCart();
this.sumOfCart = this.cartService.calculateSumOfCart();
this.countOfCart = this.cartService.calculateCartCount();
  }

  onRemoveFromCart(item: Item) {
    this.cartService.deleteFromCartFromHome(item);
  }

onAddToCart(item: Item) {
  this.cartService.addToCart(item);
  this.sumOfCart = this.cartService.calculateSumOfCart();
this.countOfCart = this.cartService.calculateCartCount();
}

}
