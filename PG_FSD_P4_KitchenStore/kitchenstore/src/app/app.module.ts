import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { CustomerregistrationComponent } from './customerregistration/customerregistration.component';
import { CustomercartComponent } from './customercart/customercart.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule} from '@angular/forms';
import { AdmincategoryitemlistComponent } from './admincategoryitemlist/admincategoryitemlist.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminaddproductComponent } from './adminaddproduct/adminaddproduct.component';
import { CustomerwelcomeComponent } from './customerwelcome/customerwelcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerthankyoupageComponent } from './customerthankyoupage/customerthankyoupage.component';
import { AdminupdatepasswordComponent } from './adminupdatepassword/adminupdatepassword.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerhomeComponent,
    CustomerregistrationComponent,
    CustomercartComponent,
    OrdersummaryComponent,
    AdminloginComponent,
    AdmincategoryitemlistComponent,
    AdminaddproductComponent,
    CustomerwelcomeComponent,
    HeaderComponent,
    FooterComponent,
    CustomerthankyoupageComponent,
    AdminupdatepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

