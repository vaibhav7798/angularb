import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private dataService:DataService)
  {

  }

   multiplication()
   {
     let result=this.dataService.multiplication(10,10);
     console.log("result is:"+result);
     
    }

}
