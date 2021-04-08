import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartTotal = 0;
  isLoggedIn = true;

  constructor(private cartService: CartService,
    private translate: TranslateService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authChanged.subscribe(loggedIn => 
      this.isLoggedIn = loggedIn);
    this.isLoggedIn = sessionStorage.getItem("email") ? true : false;

    // if (sessionStorage.getItem("email") != undefined) {
    //  thisisLoggedIn = true;      
    // } else {
    //  this.LoggedIn = false;
    // }

    this.cartService.cartChanged.subscribe(cartItems => {
      this.cartTotal = this.cartService.calculateSumOfCart();   
      console.log(cartItems);
    });
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}

onLogout() {
  sessionStorage.removeItem("email");
  this.authService.authChanged.next(false);
  this.router.navigateByUrl("/");
  }
}
