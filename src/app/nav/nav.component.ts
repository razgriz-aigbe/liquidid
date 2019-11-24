import { Component, OnInit } from '@angular/core';
import {KeyManagerService} from '../key-manager.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public keyMan: KeyManagerService) { }

  ngOnInit() {
  }

  generateNewID() {
    this.keyMan.generateNewID()
  }

}
