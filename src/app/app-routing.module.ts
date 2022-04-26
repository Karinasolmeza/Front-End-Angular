import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/Auth/login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path: 'home', component: PortfolioComponent },
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch:'full' },
  { path: '**', redirectTo: '/home'}
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
