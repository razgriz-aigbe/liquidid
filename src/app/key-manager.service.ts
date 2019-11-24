import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class KeyManagerService {
  currentKey: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  generateNewID() {
    this.currentKey = '6482749KDJF293JSA';

  }

}


