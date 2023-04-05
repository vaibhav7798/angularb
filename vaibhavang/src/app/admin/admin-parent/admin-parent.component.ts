import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-parent',
  templateUrl: './admin-parent.component.html',
  styleUrls: ['./admin-parent.component.scss']
})
export class AdminParentComponent {

 parentCityName:any;
 fruits=['apple','banana','kiwi'];
 car=['bmw','swift','audi'];
 dataFromChild:any; 
 parenttable=[{
  name:'vaibhav',age:23},{name:'rahul',age:20},{name:'prakash',age:2},{name:'amol',age:12}
]

 parentData(event:any)
  {
     console.log("input box value",event.target.value);
      this.parentCityName=event.target.value;
  }
 
  getChildData(value:any)
  {
   this.dataFromChild=value;
  }
 

}
