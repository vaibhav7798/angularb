import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {

  
//url="http://localhost:3000/user";
url="http://localhost:3000/";

constructor(private http:HttpClient) {   }

//  dynamic use url
//  getUser(url:any)
//  {
//  return this.http.get(url); 
//  }

getUser(endpoint:any)
{
     let updateurl1=this.url +endpoint;
     console.log("updateurl",updateurl1);  
     return  this.http.get(updateurl1);
   
}

getApi(endpoint:any)
{    
  let updateurl=this.url + endpoint;
  console.log(updateurl);
    return this.http.get(updateurl);
}

postApiCall(endpoint:any,data:any)
{
  let posturl=this.url + endpoint; 
  return this.http.post(posturl,data);
}

}
