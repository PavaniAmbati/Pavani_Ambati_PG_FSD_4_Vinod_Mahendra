import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { categoryitemsInterface } from '../shared/categoryitems';



@Injectable({
  providedIn: 'root'
})
export class CategoryitemlistService {

  /* 
  info1: string[] = ["Bread", "Flaxseed Bread"]
  info2: string[]= ["Bread", "Wholewheat Bread"]
  info3: string[]= ["Bread","Multigrain Bread"]

  getinfo1():string[]{
    return this.info1;
  }

  getinfo2():string[]{
    return this.info2;
  }

  getinfo3():string[]{
    return this.info3;
  } */

  /* constructor(private http: HttpClient) { }
   private url=    "http://localhost:4200/assets/data/CategoryItems.json";                         //"../../assets/data/CategoryTtems.json";
                  
   getInfo():Observable<categoryitemsInterface[]>{
     return this.http.get<categoryitemsInterface[]>(this.url);
     } */

  //Array<string>[]

  /* getInfo(): string[][]{
    return [["Bread", "Wholewheat Bread"],["Bread", "Multigrain Bread"]];
          
  } */

  //constructor(){}

  //----------------

  apiURL = 'http://localhost:3000';
  apiURL1 = 'http://localhost:3000/categoryItems/';
  constructor(private http: HttpClient) { }

  /*========================================
  CRUD Methods for consuming RESTful API
=========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //Get list of category items
  getCatItems(): Observable<categoryitemsInterface[]> {
    return this.http.get<categoryitemsInterface[]>(this.apiURL + '/categoryItems')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

 

  //Add new product
  createProduct(product: any): Observable<categoryitemsInterface[]> {
    return this.http.post<categoryitemsInterface[]>(this.apiURL + '/categoryItems', JSON.stringify(product), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Get list of category items by Id
  getCatItem(id: string): Observable<categoryitemsInterface[]> {
    return this.http.get<categoryitemsInterface[]>(this.apiURL + '/categoryItems' + '?' + 'id=' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Get list of category items by category
  getListbyCat(Category: string): Observable<categoryitemsInterface[]> {
    return this.http.get<categoryitemsInterface[]>(this.apiURL + '/categoryItems' + '?' + 'Category=' + Category)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Get list of category items by item
  getListbyItem(Item: string): Observable<categoryitemsInterface[]> {
    return this.http.get<categoryitemsInterface[]>(this.apiURL + '/categoryItems' + '?' + 'Item=' + Item)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }




  //Update product
  updateProduct(id: string, product: any): Observable<categoryitemsInterface[]> {
    return this.http.put<categoryitemsInterface[]>(this.apiURL + '/categoryItems/' + id, JSON.stringify(product), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Delete category item
  deleteCategoryitem(id: string) {
    return this.http.delete<categoryitemsInterface[]>(this.apiURL + '/categoryItems/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)

      )

  }

  //

  // Error handling 
  handleError(error: { error: { message: string; }; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}



