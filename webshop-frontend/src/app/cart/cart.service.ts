import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../item/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 private cartItems: Item[] = [];

 cartChangeed = new Subject<Item[]>();

  constructor() { }
  
  addToCart(item: Item) {
     this.cartItems.push(item);
     this.cartChangeed.next(this.cartItems);
  }
  getItemsFromCart() {
    return this.cartItems;
  }

  emptyCart() {
    this.cartItems = [];
    this.cartChangeed.next(this.cartItems);
  }
  
  deleteFromCart(i: number) {
     this.cartItems.splice(i,1);
     this.cartChangeed.next(this.cartItems);

  }

  calculateSumOfCart() {
    let sumOfCart = 0;
    this.cartItems.forEach(element => {
      sumOfCart += (Number)(element.price);
    });
    return sumOfCart;
  }

}
