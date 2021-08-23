import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryitemlistService } from '../shared/categoryitemlist.service';

@Component({
  selector: 'app-adminaddproduct',
  templateUrl: './adminaddproduct.component.html',
  styleUrls: ['./adminaddproduct.component.css']
})
export class AdminaddproductComponent implements OnInit {

  @Input() productDetails = { Category: '', Item: '', Price: '', ProductDescription: '', Quantity: 0, TotalPrice: '0.00' }
  selectedImage = null;

  constructor(
    public restApi: CategoryitemlistService,
    public router: Router
  ) { }

  ngOnInit() { }

  onUpload() {

  }

  addProduct() {
    this.restApi.createProduct(this.productDetails).subscribe((data: {}) => {
      this.router.navigate(['/admincategoryitemlist'])
    })
  }

  logout(){
    localStorage.removeItem('localUser');
    this.router.navigate(['/adminlogin']);

  }

}


