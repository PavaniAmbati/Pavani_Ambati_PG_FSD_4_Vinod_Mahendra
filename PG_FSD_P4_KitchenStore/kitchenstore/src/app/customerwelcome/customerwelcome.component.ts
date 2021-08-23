import { Component, OnInit } from '@angular/core';
import { CategoryitemlistService } from '../shared/categoryitemlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerwelcome',
  templateUrl: './customerwelcome.component.html',
  styleUrls: ['./customerwelcome.component.css']
})
export class CustomerwelcomeComponent implements OnInit {
  cartItem: number = 0;
  public categoryitems: any = [];

  constructor(
    public restApi: CategoryitemlistService,
    public router: Router
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




}
