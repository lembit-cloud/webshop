import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/category/category.service';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  categories: {name: string}[] = [];
  id!: number;
  itemEditForm!: FormGroup;

  constructor(private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService) { } 

  ngOnInit(): void {
    this.categoryService.getAllCategorys().subscribe(categoriesFromBack =>
      this.categories = categoriesFromBack
    );
    this.id = (Number)(this.route.snapshot.paramMap.get("itemId"));        
    this.itemService.getItem(this.id).subscribe(responce => {
      let item = responce;
      this.itemEditForm = new FormGroup ({
        id: new FormControl(item.id),
        title: new FormControl(item.title),
        price: new FormControl(item.price),
        imgSrc: new FormControl(item.imgSrc),
        category: new FormControl(item.category),
      }) 
    } ); 
  }

  onSubmit(form: FormGroup) {    
    if (form.valid) {
      const formValue = form.value
      const item = new Item(
        formValue.id,
        formValue.imgSrc,
        formValue.title,
        formValue.price,
        formValue.category);
    this.itemService.editItem(item).subscribe();
    this.router.navigateByUrl("/item/view")

  }

  }

}
