import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {ExistingKeyComponent} from './existing-key/existing-key.component';

const routes: Routes = [
  { path: '', component: ExistingKeyComponent},
  {path: 'existing-key', component: ExistingKeyComponent},
  { path: '**', component: ExistingKeyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
