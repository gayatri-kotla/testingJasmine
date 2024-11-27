import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { 
    console.log("HTTP call")
  }
  mySharedFunction(){

  }

  deleteUserById(id:any):Observable<any>{

    return this.http.delete<any>("https://fakestoreapi.com/products"+"/"+id)

  }
}
