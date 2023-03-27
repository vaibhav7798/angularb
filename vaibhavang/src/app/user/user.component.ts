import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

   myTempRef:any;
   city_name?:string;
  myFunction(vaibhav:any)
  {
    this.myTempRef=vaibhav;
  }

 myEvent()
 {
  console.log("hey mouse(in) over...");
  
 }

 myBlur()
 {
  console.log("Blur....");
  
 }

 myEvChekBox()
 {
  console.log("you have check In..");
}

myEvChekBox1(vaibhav:any)
{
  console.log("Event:"+vaibhav.target.value);
}
 
constructor(private dataService:DataService)
{

}

ngOnInit()//ng life cycle hook   called by implicity
{
   this.city_name=this.dataService.city;
}
}

