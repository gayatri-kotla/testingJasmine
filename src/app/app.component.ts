import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice';
  url:any = "https://fakestoreapi.com/products";

  constructor(private http:HttpClient){}
  multiply(a:number,b:number){
    // this.data.mySharedFunction();
    return a*b;
  }

  add(a:number,b:number){
    return a+b;
  }

  getProducts():Observable<any>{
    return this.http.get(this.url);
  }

  getProductById(id:any):Observable<any>{
    return this.http.get(this.url+"/"+id);
  }
}
