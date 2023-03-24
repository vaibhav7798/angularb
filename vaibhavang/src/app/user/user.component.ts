import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

   myTempRef:any;

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

}

