import { Component, OnInit } from '@angular/core';
import { CategoryitemlistService } from '../shared/categoryitemlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItem: number = 0;
  public categoryitems: any = [];

  constructor(
    public restApi: CategoryitemlistService
  ) { }

  ngOnInit(): void {
    this.cartItemFunc();
  }

  //Get category item list by item
  filterProductbyItem(Item: string) {
    console.log(Item)
    return this.restApi.getListbyItem(Item).subscribe((data: {}) => {
      this.categoryitems = data;
    })
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
