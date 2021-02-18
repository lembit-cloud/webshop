import { Injectable } from '@angular/core';
import { Item } from '../item/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 private cartItems: Item[] = [];

  constructor() { }
  
  addToCart(item: Item) {
     this.cartItems.push(item);
  }
  getItemsFromCart() {
    return this.cartItems;
  }

  emptyCart() {
    this.cartItems = [];
  }
  
  deleteFromCart(i: number) {
     this.cartItems.splice(i,1);

  }


}
