import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryViewComponent } from './category/category-view/category-view.component';
import { ItemAddComponent } from './item/item-add/item-add.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemViewComponent } from './item/item-view/item-view.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
//only routes
{ path: "", redirectTo: "home", pathMatch: "full"},
{ path: "login", component: LoginComponent},
{ path: "signup", component: SignupComponent},
{ path: "home", component: ItemListComponent},
{ path: "admin", component: AdminComponent, canActivate: [AuthGuard] },
{ path: "item/edit/:itemId", component: ItemEditComponent, canActivate: [AuthGuard] },
{ path: "item/view", component: ItemViewComponent, canActivate: [AuthGuard] },
{ path: "item/add", component: ItemAddComponent, canActivate: [AuthGuard] },
{ path: "category/view", component: CategoryViewComponent, canActivate: [AuthGuard] },
{ path: "category/add", component: CategoryAddComponent, canActivate: [AuthGuard] },
{ path: "cart", component: CartComponent},
//kõik ülejäänud ruudid
{ path: "**", component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
