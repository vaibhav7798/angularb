import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.scss']
})
export class TemplatedrivenComponent {
 
  constructor(private dataService:DataService,private router:Router)
{

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
