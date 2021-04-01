import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private http: HttpClient) { }

  addNewCategory(category: {email: string, password: string}) {
    console.log(category);
    return this.http.post("http://localhost:8080/category-add", category);
  }

  getAllCategorys() {   
      return this.http.get<{name: string}[]>("http://localhost:8080/category-list");
    }
}
