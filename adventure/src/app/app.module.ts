import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main/components/header/header.component';
import { Dashboard1Component } from './main/components/dashboard1/dashboard1.component';
import ButtonComponent from './main/components/button/button.component';
import { Dashboard2Component } from './main/components/dashboard2/dashboard2.component';
import { CardComponent } from './main/components/card/card.component';

import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { ParentPageComponent } from './main/components/parent-page/parent-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Dashboard1Component,
    ButtonComponent,
    Dashboard2Component,
    CardComponent,
    ParentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatPaginatorModule,
    FormsModule // pt [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
