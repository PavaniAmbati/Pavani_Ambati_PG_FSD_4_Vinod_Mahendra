import { Component, OnInit, Input } from '@angular/core';
import { CategoryitemlistService } from '../shared/categoryitemlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admincategoryitemlist',
  templateUrl: './admincategoryitemlist.component.html',
  styleUrls: ['./admincategoryitemlist.component.css'],
  providers: [CategoryitemlistService]
})
export class AdmincategoryitemlistComponent implements OnInit {

  @Input() categoryitemslist = { Category: '', Item: '' }

  public categoryitems: any = [];
  public user: any = [];
  username = '';

  constructor(
    public restApi: CategoryitemlistService,
    public router: Router
  ) { }

  ngOnInit() {
    this.loadcatlist();
  
  }

  //Get category item list
  loadcatlist() {
    return this.restApi.getCatItems().subscribe((data: {}) => {
      this.categoryitems = data;
      console.log(this.categoryitems);
    })
  }

  //Get category item list by id
  loadcatlistbyid(Id: string) {
    return this.restApi.getCatItem(Id).subscribe((data: {}) => {
      this.categoryitems = data;
    })
  }

  //Get category item list by category
  filterProductbyCat(Category: string) {
    return this.restApi.getListbyCat(Category).subscribe((data: {}) => {
      this.categoryitems = data;
    })
  }

  //Get category item list by item
  filterProductbyItem(Item: string) {
    return this.restApi.getListbyItem(Item).subscribe((data: {}) => {
      this.categoryitems = data;
    })
  }

  // Delete category item list
  deleteCatitem(id: string) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteCategoryitem(id).subscribe(data => {
        this.loadcatlist()
      })
    }

  }

  refresh() {
    window.location.reload();
  }

  logout(){
    localStorage.removeItem('localUser');
    this.router.navigate(['/adminlogin']);

  }

}

