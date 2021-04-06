import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  constructor(private categoryService: CategoryService,
    
   private _toastService: ToastService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.categoryService.addNewCategory(form.value.category).subscribe();
    this._toastService.success('Lisatud!');
    form.reset();
    // console.log(form.value);
  }

}
