import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems :
    {
      imgSrc: string;
      title: string;
      price: string;
      category: string;
  }[] = [];

  constructor() { }
}
