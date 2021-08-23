import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    if(username === 'simplilearn' && password === 'simplilearn') {
      return true;
    }
    return false;
  }
}
