import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private http: HttpClient) { }

  addNewCategory(category: string) {
    console.log(category);
    return this.http.post("http://localhost:8080/category-add", {name:category});
  }

  getAllCategorys() {   
    return this.http.get<{name: string}[]>("http://localhost:8080/category-list");
  }

  deleteCategory(id: number) {   
    return this.http.delete("http://localhost:8080/category-delete/" + id);
  }

}
