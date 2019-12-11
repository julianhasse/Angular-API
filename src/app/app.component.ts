import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular API!';
  users: User[];

  constructor(private service: UserService) { }

  // tslint:disable-next-line: use-lifecycle-interface

  callApi() {
    return this.service.getUsers().subscribe( data => { this.users = data; });
  }

}
