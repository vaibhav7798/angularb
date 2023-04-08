import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CommonApiCallService } from '../common-api-call.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-loginsucess',
  templateUrl: './loginsucess.component.html',
  styleUrls: ['./loginsucess.component.scss']
})
export class LoginsucessComponent {
   userName!:any;
   userdata:any;
   userhotel:any;
  // url="http://localhost:3000/user"; //static
   endpoint='user';//dyanamic
   endpoint1="hotelDetails";
  subcibedata: any;
   constructor(private dataService:DataService,private commonApiCallService:CommonApiCallService,
              private http:HttpClient)
  {
   
  }

   ngOnInit()
   {
  // //   this.commonApiCallService.getUser().subscribe(Response=>{
  // //                this.userdata=Response;
  // //  console.log('response..',Response);
     
  // //  })
  // // 
     this.userName=this.dataService.formFullName;
  
  this.subcibedata=this.commonApiCallService.getApi(this.endpoint1).subscribe(Response=>{
          this.userhotel=Response;
          console.log(Response);
           
  })
   }  
    

   getUserData()
   {
     this.commonApiCallService.getUser(this.endpoint).subscribe(Response=>{
        this.userdata=Response;
        console.log('response',Response)
     })
   
  //  this.http.get(this.url).subscribe(response=>{
  //   this.userdata=Response;
  //   console.log(response);
    //   }) 
  
   
    }

    ngOnDestory()//this life cyle hook call at the last
    {
      this.subcibedata.unsubcribe();//to avoid memory lekeage problem we shoould have to unsubcribe.
    }

}