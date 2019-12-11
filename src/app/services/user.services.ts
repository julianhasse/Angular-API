// Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

// Service decorator
@Injectable({
  providedIn: 'root'
})

// create Service class
export class UserService {
  // define API url
  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Inject Service
  constructor(private http: HttpClient) { }

  // method to request users' object
  getUsers() {
    return this.http.get<User[]>(this.apiUrl, { headers: {accept: 'Accept: application/json'}});
  }
}
