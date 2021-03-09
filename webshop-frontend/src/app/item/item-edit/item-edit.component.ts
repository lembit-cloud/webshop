import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  id!: number;
  itemEditForm!: FormGroup

  constructor(private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = (Number)(this.route.snapshot.paramMap.get("itemId"));        
    let item = this.itemService.getItem(this.id);
    this.itemEditForm = new FormGroup ({
      title: new FormControl(item.title),
      price: new FormControl(item.price),
      imgSrc: new FormControl(item.imgSrc),
      category: new FormControl(item.category),
    })  
  }

  onSubmit(form: FormGroup) {    
    if (form.valid) {
      const formValue = form.value
      const item = new Item(
        formValue.imgSrc,
        formValue.title,
        formValue.price,
        formValue.category);
    this.itemService.editItem(this.id,item);
    this.router.navigateByUrl("/item/view")

  }

  }

}
