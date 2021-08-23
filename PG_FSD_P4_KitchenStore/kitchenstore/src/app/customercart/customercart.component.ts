import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryitemlistService } from '../shared/categoryitemlist.service';

@Component({
  selector: 'app-customercart',
  templateUrl: './customercart.component.html',
  styleUrls: ['./customercart.component.css'],
  providers: [CategoryitemlistService]
})
export class CustomercartComponent implements OnInit {
  cartItem: number = 0;
  public cartitems: any = [];
  public categoryitems: any = [];


  constructor(
    public restApi: CategoryitemlistService,
    public router: Router

  ) { }

  ngOnInit(): void {
    this.CartDetails();
    this.loadCart();
    this.cartItemFunc();
  }

  /*  createCartForm() {
     this.cartForm = this.fb.group({
       Total: [null],
       Shippingfee: [null],
       Salestax: [null],
       Finalprice: [null]
     }
 
     )
   } */


  /*    for(let i=0; i<this.cartitems.length; i++){
         this.categoryitems[i] = this.cartitems.find((i: { id: string; }) => i.id === this.cartitems.id)
         index = i;
         break;
       } */

  CartDetails() {
    if (localStorage.getItem('localCart') != null) {
      this.categoryitems = JSON.parse(localStorage.getItem('localCart')!);
      console.log(this.categoryitems);

    }
  }

  total: number = 0;
  shippingfee: number = 0;
  salestax: number = 0;
  finalprice: number = 0;
  loadCart() {
    if (localStorage.getItem('localCart')) {
      this.categoryitems = JSON.parse(localStorage.getItem('localCart')!);
      this.total = this.categoryitems.reduce(function (acc: any, val: { Price: number; Quantity: number; }) {

        return acc + (val.Price * val.Quantity);
      }, 0)
    }
    console.log(this.total);
    this.shippingfee = 7;
    this.salestax = (this.total * 15) / 100;
    this.finalprice = (this.total + this.shippingfee + this.salestax);
    this.cartitems = [{ "Total": this.total, "Shippingfee": this.shippingfee, "Salestax": this.salestax, "Finalprice": this.finalprice }]

  }

  deleteAll() {
    localStorage.removeItem('localCart');
    this.categoryitems = [];
    this.refresh();

  }

  DeleteById(categoryitems: any) {
    console.log(categoryitems);
    console.log(this.categoryitems);
    if (localStorage.getItem('localCart')) {
      this.categoryitems = JSON.parse(localStorage.getItem('localCart')!);

      for (let i = 0; i < this.categoryitems.length; i++) {
        if (this.categoryitems[i].id === categoryitems.id) {
          this.categoryitems.splice(i, 1);
          localStorage.setItem('localCart', JSON.stringify(this.categoryitems));
          this.loadCart();
        }
      }

    }

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


  checkout() {
    console.log("hi");
    console.log(this.cartitems);
    localStorage.setItem('localCartitems', JSON.stringify(this.cartitems));
    this.router.navigate(['/customerregistration'])
  }

}
