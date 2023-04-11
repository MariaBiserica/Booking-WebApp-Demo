import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/components/header/header.component';
import { Dashboard1Component } from './main/components/dashboard1/dashboard1.component';

import { MatButtonModule } from '@angular/material/button';
import ButtonComponent from './main/components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Dashboard1Component,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
