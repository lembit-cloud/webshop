import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../item/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: {cartItem: Item, count: number}[] = [];
 cartChanged = new Subject<{cartItem: Item, count: number}[]>();

  // removeFromCart(item: Item) {
  //   throw new Error('Method not implemented.');
  // }

  constructor() { }
  
  addToCart(item: Item) {
    let i = this.cartItems.findIndex(cartItem => cartItem.cartItem.title == item.title);
    if (i == -1) {    
     this.cartItems.push({cartItem: item, count: 1});
    } else {
      this.cartItems[i].count++;
    }    
     this.cartChanged.next(this.cartItems);
  }

  getItemsFromCart() {
    return this.cartItems;
  }

  emptyCart() {
    this.cartItems = [];
    this.cartChanged.next(this.cartItems);
  }
  
  deleteFromCart(i: number) {
     this.cartItems.splice(i,1);
     this.cartChanged.next(this.cartItems);
  }

  deleteFromCartFromHome(item: Item) {
    let i = this.cartItems.findIndex(cartItem => cartItem.cartItem.title == item.title);
    if (i != -1) {     
     if (this.cartItems[i].count == 1) {
       this.cartItems.splice(i,1);       
     } else {
        this.cartItems[i].count--;
     }        
     this.cartChanged.next(this.cartItems);
    } 
  }

  calculateSumOfCart() {
    let sumOfCart = 0;
    this.cartItems.forEach(element => {
      sumOfCart += (Number)(element.cartItem.price)*element.count
    });
    return sumOfCart;
  }

  calculateCartCount() {
    let count = 0;
    this.cartItems.forEach(element => {
      count += element.count
    });
    return count;
  }
}
