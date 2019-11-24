import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { ExistingKeyComponent } from './existing-key/existing-key.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CreateNewComponent,
    ExistingKeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
