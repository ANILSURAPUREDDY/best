import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient, HttpHandler  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const baseUrl = '/web';

let httpOptions = { headers : new HttpHeaders({
  "Content-Type": "application/json"
}) };

@Injectable({
  providedIn: 'root'
})
export class SupermanService {

  constructor(private http:HttpClient) { }

  postSerive(reqObj:any){
    return this.http.post(baseUrl,reqObj,httpOptions)
  }

  getService(){
    
    // return this.http.get('https://reqres.in/api/users');
    //https://reqres.in/api/users
  }
}
