import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryitemlistService } from '../shared/categoryitemlist.service';


@Component({
  selector: 'app-customerregistration',
  templateUrl: './customerregistration.component.html',
  styleUrls: ['./customerregistration.component.css']
})
export class CustomerregistrationComponent implements OnInit {
  cartItem: number = 0;
  public registrationitems: any = [];
  public categoryitems: any = [];

  @Input() Registrationitems = { firstname: '', lastname: '', phonenumber: '', emailaddress: '', streetname: '', apartment: '', city: '', state: '', postalcode: '', country: '', creditcard: '', cvvnumber: '', expiration: '', inlineRadioOptions: '' }


  errorMessage = 'Name, Phone, Email, Address, City, State, City, Zipcode, Paymentmethod, Creditcard number, CVV number and Expirydate cannot be blank';
  isfieldsblank = true;

  constructor(
    public restApi: CategoryitemlistService,
    public router: Router,

  ) { }

  ngOnInit(): void {
    this.cartItemFunc();

  }


  cartItemFunc() {
    if (localStorage.getItem('localCart') != null) {
      var cartCount = JSON.parse(localStorage.getItem("localCart")!);
      this.cartItem = cartCount.length;
      console.log(cartCount.length);
    }
  }

  refresh() {
    window.location.reload();
  }

  registration(registrationitems: any) {

    if (registrationitems.firstname == undefined || registrationitems.lastname == undefined || registrationitems.phonenumber == undefined || registrationitems.emailaddress == undefined || registrationitems.streetaddress == undefined || registrationitems.apartment == undefined || registrationitems.city == undefined || registrationitems.state == undefined || registrationitems.postalcode == undefined || registrationitems.country == undefined || registrationitems.creditcard == undefined || registrationitems.cvvnumber == undefined || registrationitems.expiration == undefined || registrationitems.inlineRadioOptions == undefined ) {
      console.log("field is blank");
      console.log(registrationitems.firstname);
      this.router.navigate(['/customerregistration']);

    } else {
      console.log("field is not blank");
      console.log(registrationitems);
      this.registrationitems = [{ "firstname": this.registrationitems.firstname, "lastname": this.registrationitems.lastname, "phonenumber": this.registrationitems.phonenumber, "emailaddress": this.registrationitems.emailaddress, "streetaddress": this.registrationitems.streetaddress, "apartment": this.registrationitems.apartment, "city": this.registrationitems.city, "state": this.registrationitems.state, "postalcode": this.registrationitems.postalcode, "country": this.registrationitems.country }]
      console.log(this.registrationitems);

      localStorage.setItem('registrationitems', JSON.stringify(this.registrationitems));
      this.router.navigate(['/ordersummary']);

    }
  }

}

