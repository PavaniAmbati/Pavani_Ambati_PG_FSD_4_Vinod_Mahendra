import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { CustomerregistrationComponent } from './customerregistration/customerregistration.component';
import { CustomercartComponent } from './customercart/customercart.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmincategoryitemlistComponent } from './admincategoryitemlist/admincategoryitemlist.component';
import { AdminaddproductComponent } from './adminaddproduct/adminaddproduct.component';
import { CustomerwelcomeComponent } from './customerwelcome/customerwelcome.component';
import { CustomerthankyoupageComponent } from './customerthankyoupage/customerthankyoupage.component';
import { AdminupdatepasswordComponent } from './adminupdatepassword/adminupdatepassword.component';
import { AuthguardService } from './shared/authguard.service';

const routes: Routes = [

{path: "", pathMatch: "full",redirectTo: "/customerwelcome"},
{path: "customerhome", component: CustomerhomeComponent},
{path: "customerregistration", component: CustomerregistrationComponent},
{path: "customercart", component: CustomercartComponent},
{path: "ordersummary", component: OrdersummaryComponent},
{path: "adminlogin", component: AdminloginComponent},
{path: "admincategoryitemlist", component: AdmincategoryitemlistComponent, canActivate:[AuthguardService]},
{path: "adminaddproduct", component: AdminaddproductComponent, canActivate:[AuthguardService]},
{path: "customerwelcome", component: CustomerwelcomeComponent},
{path: "customerhome/:Category", component: CustomerhomeComponent},
{path: "customerthankyoupage", component: CustomerthankyoupageComponent},
{path: "adminupdatepassword/:Username", component: AdminupdatepasswordComponent,canActivate:[AuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
