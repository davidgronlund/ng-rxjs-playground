import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  private users: User[] = [
    {
      id: 1,
      name: 'David',
      address: 'Ingared',
    },
  ];
  get(): Observable<User> {
    return from(this.users);
  }
}
