import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {

  
//url="http://localhost:3000/user";

constructor(private http:HttpClient) {   }

//dynamic use url
getUser(url:any)
{
return this.http.get(url); 
}
}
