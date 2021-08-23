import { Component, OnInit } from '@angular/core';

export class Customer {

  constructor(public id: number, public name: string, public phone: string, public email: string, public birthdate: Date ){}
}

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
 /*  customer = {
    id: 1,
    name: 'pavani',
    phone: '123456789',
    email: 'pavani.amb@simplilearn.com'


  } */

public customerSearchFilter : any = '';

query = '';
customers = [
  new Customer(1, 'Pavani', '23432432', 'pavani@pavani.com', new Date()),
  new Customer(1, 'seshu', '23432432', 'seshu@seshu.com', new Date()),
  new Customer(1, 'neha', '23432432', 'neha@neha.com', new Date()),
  new Customer(1, 'niketh', '23432432', 'niketh@niketh.com', new Date())
  
  /* {id:1, name:'pavani', phone: '23432432' ,email: 'pavani@pavani.com'},
  {id:2, name:'seshu', phone: '32432432' ,email: 'seshu@seshu.com'},
  {id:3, name:'neha', phone: '32432432432' ,email: 'neha@neha.com'},
  {id:3, name:'niketh', phone: '4324323243' ,email: 'niketh@niketh.com'} */
];


  constructor() { }

  ngOnInit(): void {
  }

}
