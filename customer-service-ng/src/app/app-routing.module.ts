import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path: 'welcome', component:WelcomeComponent},
  {path: 'customers', component:ListCustomersComponent},
  {path:'**',component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
