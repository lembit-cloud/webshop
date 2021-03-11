import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartTotal = 0;

  constructor(private cartService: CartService,
    private translate: TranslateService) { }

  ngOnInit(): void {
    this.cartService.cartChangeed.subscribe(cartItems => {
      this.cartTotal = this.cartService.calculateSumOfCart();   
      console.log(cartItems);
    });
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}

}
