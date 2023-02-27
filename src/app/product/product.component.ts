import { Component } from '@angular/core';
// import { Observable } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, of, catchError } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(){}


 productcollection:any=[]
  data$ = fromFetch('https://dummyjson.com/products').pipe(
  switchMap(response => {
    if (response.ok) {
      // OK return data
      return response.json();
    } else {
      // Server is returning a status requiring the client to try something else.
      return of({ error: true, message: `Error ${ response.status }` });
    }
  }),
  catchError(err => {
    // Network or other error, handle appropriately
    console.error(err);
    return of({ error: true, message: err.message })
  })
 ).subscribe((data)=>{
  console.log(data);
  this.productcollection=data.productcollection
  console.log(this.productcollection);


 })


 
// productcollection =[
//   {
//     img:'img',
//     head:'hai',
//     sub:'hello',
//     price:'$121.55'
//   },
//   {
//     img:'img',
//     head:'Hai',
//     sub:'Hello',
//     price:'$120.00'
//   },
//   {
//     img:'img',
//     head:'dongp',
//     sub:'',
//     price:''
//   },
//   {
//     img:'img',
//     head:'mongo',
//     sub:'',
//     price:''
//   }
//  ]


}
