import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  constructor( private itemService: ItemService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {    
    if (form.valid) {
      const formValue = form.value
      const item = new Item(
        null,
        formValue.imgSrc,
        formValue.title,
        formValue.price,
        formValue.category);
    this.itemService.addNewItem(item).subscribe();
    this.router.navigateByUrl("/item/view")
  }
    console.log(form);
  }

}
