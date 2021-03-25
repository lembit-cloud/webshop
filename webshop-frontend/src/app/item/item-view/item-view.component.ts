import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(responce => {      
      this.items = responce;    
 });
}

onAdminDelete(item: Item, i:number) {
  let isDeleteConfirm = confirm("Oled kindel, et soovid toodet jäädavalt kustutada?");
  if (isDeleteConfirm) {
    if(item.id) {
    this.itemService.deleteItem(item.id).subscribe();
    this.items.splice(i,1);
   }
  }
 }
}
