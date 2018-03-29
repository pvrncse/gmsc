import { Injectable } from '@angular/core';
import {Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NodemodulesService {

  constructor(private http: Http) { }
  testData=[{'name':'abc','property':'123'},{'name':'abcd','property':'1234'},{'name':'abcde','property':'12345'}];
  loadSomeData(){
    return 'testdata from service';
  }
  loadNodemodules(query:string){
  let apiUrl: string = 'https://ac.cnstrc.com/autocomplete/'+query+'?autocomplete_key=CD06z4gVeqSXRiDL2ZNK&c=ciojs-0.0.349&i=4fade543-fc49-4ec0-aacc-97daedfa5762&s=9';
  let headers = new Headers({ "content-type": "application/json" });
  headers.append('custom-header','test');
  let options = new RequestOptions({ headers: headers });
  return this.http.get(apiUrl, options).map(
    (response) => response.json()
  )
}
}
