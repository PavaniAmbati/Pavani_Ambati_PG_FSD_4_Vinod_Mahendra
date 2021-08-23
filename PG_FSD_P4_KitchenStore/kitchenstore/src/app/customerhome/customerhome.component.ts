import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { CategoryitemlistService } from '../shared/categoryitemlist.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css'],
  providers: [CategoryitemlistService]
})
export class CustomerhomeComponent implements OnInit {
  cartItem: number = 0;
  category = this.actRoute.snapshot.params['Category'];
  @Input() categoryitemslist = { Item: '' }

  errorMessage = 'Quantity should be greater than 0';
  isquantitynotfilled = true;



  public categoryitems: any = [];
  constructor(
    public restApi: CategoryitemlistService,
    public router: Router,
    public actRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.showProducts(this.category);
    console.log(this.category);
    this.cartItemFunc();
  }

  loadcatlist() {
    return this.restApi.getCatItems().subscribe((data: {}) => {
      this.categoryitems = data;
    })
  }

  showitems(id: string) {
    return this.restApi.getCatItem(id).subscribe((data: {}) => {
      this.categoryitems = data;
    })
  }

  showProducts(Category: string) {
    return this.restApi.getListbyCat(Category).subscribe((data: {}) => {
      this.categoryitems = data;
    })

  }

  cartNumber: number = 0;
  cartNumberFunc() {
    var cartValue = JSON.parse(localStorage.getItem('localCart')!);
    this.cartNumber = cartValue.length;

    //console.log("hi");
    //console.log(this.cartNumber);
  }


  itemsCart: any = [];
  addCart(categoryitem: any) {
  
      console.log(categoryitem.quantity);
    console.log(categoryitem);
    let cartDataNull = localStorage.getItem('localCart');

    if (cartDataNull == null) {
      let storeDataGet: any = [];
      storeDataGet.push(categoryitem);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));

    } else {

      /* this.itemsCart.push(categoryitem);
      localStorage.setItem('localCart', JSON.stringify(this.itemsCart)); */


      var Id = categoryitem.id;
      let index: number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localCart')!);


      if (index == -1) {
        this.itemsCart.push(categoryitem);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      } else {
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }

      /*for(let i=0; i<this.itemsCart.length; i++){
         if(Id === this.itemsCart[i].id){
           this.itemsCart[i].Quantity = categoryitem.Quantity;
           index = i;
           break;
         }
       } */
      /*  
   
       }  */
    }
    this.cartItemFunc()
 
  }


  /* calcTotalPrice(id: any, Quantity: any){
    for (let i=0, i<this.itemsCart.length; i++){
      if(this.itemsCart[i].id === id) {
        this.itemsCart[i].Quantity === parseInt(Quantity)+1;

        }
      }
      localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
    } */

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







