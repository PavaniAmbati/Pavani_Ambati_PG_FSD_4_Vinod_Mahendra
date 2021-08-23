import { Component, OnInit } from '@angular/core';
import { CategoryitemlistService } from '../shared/categoryitemlist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admineditproduct',
  templateUrl: './admineditproduct.component.html',
  styleUrls: ['./admineditproduct.component.css']
})
export class AdmineditproductComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  productData: any = [];
  //productData = { Category: '', Item: '' }


  constructor(
    public restApi: CategoryitemlistService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.restApi.getCatItems().subscribe((data: {}) => {
      this.productData = data;
    })
  }

  // Update employee data
  updateProduct() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.restApi.updateProduct(this.id, this.productData).subscribe(data => {
        this.router.navigate(['/admincategoryitemlist'])
      })
    }
  }

}
