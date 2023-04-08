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
   url="http://localhost:3000/user";
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
   }

   getUserData()
   {
     this.commonApiCallService.getUser(this.url).subscribe(Response=>{
        this.userdata=Response;
        console.log('response',Response)
     })
   
  //  this.http.get(this.url).subscribe(response=>{
  //   this.userdata=Response;
  //   console.log(response);
    //   }) 
  
  }

}
