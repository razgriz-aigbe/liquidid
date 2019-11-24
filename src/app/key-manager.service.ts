import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class KeyManagerService {
  currentKey: string;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.generateNewID();
  }

  generateNewID() {
    const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let array = new Uint8Array(40);
    window.crypto.getRandomValues(array);
    array = array.map(x => validChars.charCodeAt(x % validChars.length));
    const randomState = String.fromCharCode.apply(null, array);
    this.currentKey = randomState;

  }

}


