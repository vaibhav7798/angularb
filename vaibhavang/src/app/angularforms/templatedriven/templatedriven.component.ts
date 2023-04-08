import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { CommonApiCallService } from '../common-api-call.service';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.scss']
})
export class TemplatedrivenComponent {

  ownerurl="http://localhost:3000/owner";
  ownerdata!:any;
  constructor(private dataService:DataService,private router:Router
    ,private commonApiCallService:CommonApiCallService)
{

}

 getOwnerData()
 {
     this.commonApiCallService.getUser(this.ownerurl).subscribe(response=>{
         this.ownerdata=response;
    console.log(response);
    
        })
 }

  submit(value:any)
   {
    console.log("form value",value);
    console.log(value.fullname);
    this.dataService.formFullName=value.fullname;
  
    //redirect to login sucess page
    this.router.navigateByUrl("/angularformsmodule/loginsucess");
 
  }

 

}
