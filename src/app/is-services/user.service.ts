import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserName() {
    return 'Diego Romário';
  }

  getUserId() {
    return 1;
  }

}
