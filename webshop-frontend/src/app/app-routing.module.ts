import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemAddComponent } from './item/item-add/item-add.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemViewComponent } from './item/item-view/item-view.component';

const routes: Routes = [

{ path: "home", component: ItemListComponent},
{ path: "item/edit", component: ItemEditComponent},
{ path: "item/view", component: ItemViewComponent},
{ path: "item/add", component: ItemAddComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
