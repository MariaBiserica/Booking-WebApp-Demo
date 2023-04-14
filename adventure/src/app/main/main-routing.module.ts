import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentPageComponent } from './components/parent-page/parent-page.component';
import { HeaderComponent } from './components/header/header.component';
import { Dashboard1Component } from './components/dashboard1/dashboard1.component';
import { Dashboard2Component } from './components/dashboard2/dashboard2.component';

const routes: Routes = [
  {
    path: '',
    component: ParentPageComponent
  },
  {
    path: 'parent-page',
    redirectTo: ''
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
