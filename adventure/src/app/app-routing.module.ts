import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './main/components/header/header.component';
import { Dashboard1Component } from './main/components/dashboard1/dashboard1.component';

// folosesc cand deschid o noua componenta si ma conectez la alta pagina
const routes: Routes = [{
  path: 'header',
  component: HeaderComponent
},
{
  path: 'dashboard1',
  component: Dashboard1Component
},
{
  path:'**',
  redirectTo: 'header'
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
