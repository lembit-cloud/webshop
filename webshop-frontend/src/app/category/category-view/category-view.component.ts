import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {
  categories: {name: string}[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategorys().subscribe(categoriesFromBack =>
      this.categories = categoriesFromBack 
    //  console.log(categoriesFromBack)
      
    ); 
  }

  onDeleteCategory(i: number) {
    this.categoryService.deleteCategory(i).subscribe( () =>
      this.categories.splice(i,1)
    );
  }

}
