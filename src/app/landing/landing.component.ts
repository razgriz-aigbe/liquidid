import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  openExisting() {
    return this.router.navigate([`existing-key`]);
  }

}
