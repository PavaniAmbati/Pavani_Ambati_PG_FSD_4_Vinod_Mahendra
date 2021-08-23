import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryitemlistService } from '../shared/categoryitemlist.service';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit {

  cartItem: number = 0;
  public categoryitems: any = [];
  public cartitems: any = [];
  public registrationitems: any = [];

  constructor(
    public restApi: CategoryitemlistService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.cartItemFunc();
    this.loadSummary();
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

  loadSummary() {
    if (localStorage.getItem('localCart') != null) {
      this.categoryitems = JSON.parse(localStorage.getItem('localCart')!);
      this.cartitems = JSON.parse(localStorage.getItem('localCartitems')!);
      this.registrationitems = JSON.parse(localStorage.getItem('registrationitems')!);

    }
  }

  processsale() {

    this.router.navigate(['/customerthankyoupage'])
    localStorage.removeItem('localCart');
    localStorage.removeItem('localCartitems');
    localStorage.removeItem('registrationitems');
    this.categoryitems = [];
    this.cartitems = [];
    this.registrationitems = [];

  }

}
