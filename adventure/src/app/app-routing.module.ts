import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './main/components/header/header.component';
import { Dashboard1Component } from './main/components/dashboard1/dashboard1.component';
import { Dashboard2Component } from './main/components/dashboard2/dashboard2.component';
import { ParentPageComponent } from './main/components/parent-page/parent-page.component';

const routes: Routes = [
  {
    path: '',
    component: ParentPageComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'dashboard1',
    component: Dashboard1Component
  },
  {
    path: 'dashboard2',
    component: Dashboard2Component
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
