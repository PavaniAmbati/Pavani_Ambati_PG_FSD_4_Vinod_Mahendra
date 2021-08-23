import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerthankyoupage',
  templateUrl: './customerthankyoupage.component.html',
  styleUrls: ['./customerthankyoupage.component.css']
})
export class CustomerthankyoupageComponent implements OnInit {
  cartItem: number = 0;

  constructor() { }

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
