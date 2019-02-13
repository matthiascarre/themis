import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }

  getShoppingItems(){
    return this.http.get('http://localhost:3000/api/items')
    .pipe(map(res => res.json()));
  }

  getForm1List(){
    return this.http.get('http://localhost:3000/api/form1List')
    .pipe(map(res => res.json()));
  }

  getForm1byId(formId){
    return this.http.get('http://localhost:3000/api/form1/'+ formId)
    .pipe(map(res => res.json()));
  }


  addForm1(newForm){
    let headers = new Headers();
    headers.append('content-Type','application/json');
    return this.http.post('http://localhost:3000/api/form1',newForm, {headers: headers})
    .pipe(map( res => res.json()));
  }

  //
  // addShoppingItem(newItem){
  //   let headers = new Headers();
  //   headers.append('content-Type','application/json');
  //   return this.http.post('http://localhost:3000/api/item',newItem, {headers: headers})
  //   .pipe(map( res => res.json()));
  // }
}
