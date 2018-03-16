import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NodemodulesService {

  constructor(private http: Http) { }
testData=[{'name':'abc','property':'123'},{'name':'abcd','property':'1234'},{'name':'abcde','property':'12345'}];
loadSomeData(){
  return 'testdata from service';
}
loadNodemodules(query:string){
  return this.http.get('https://ac.cnstrc.com/autocomplete/'+query+'?autocomplete_key=CD06z4gVeqSXRiDL2ZNK&c=ciojs-0.0.349&i=4fade543-fc49-4ec0-aacc-97daedfa5762&s=9&query='+query).map(
    (response) => response.json()
)
  // .subscribe(    //subscribe here if you want to user here, else add subscribe in component to make use of service
  //   (data) => console.log(data)
  // )
}
}
