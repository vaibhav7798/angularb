import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-loginsucess',
  templateUrl: './loginsucess.component.html',
  styleUrls: ['./loginsucess.component.scss']
})
export class LoginsucessComponent {
   userName!:any;

  constructor(private dataService:DataService)
  {

  }

   ngOnInit()
   {
    this.userName=this.dataService.formFullName;
   }

}
