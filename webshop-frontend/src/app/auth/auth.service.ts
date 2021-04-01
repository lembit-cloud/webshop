import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChanged =new Subject<boolean>();
 

  constructor(private http: HttpClient) { }

  addNewUser(user: {email: string, password: string}) {
    return this.http.post("http://localhost:8080/user-add", user);
  }

  getAllUsers() {   
      return this.http.get<{email: string, password: string}[]>("http://localhost:8080/user-list");
    }
  }
