import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/category/category.service';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {
  categories: {name: string}[] = [];

  constructor( private itemService: ItemService,
    private router: Router,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategorys().subscribe(categoriesFromBack =>
      this.categories = categoriesFromBack
    );
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
