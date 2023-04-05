import { Component, Input} from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
   carName!:string;
  
   @Input() cname:any;
   @Input() fruits:any;





   constructor(private dataService:DataService)
  {
  }


  ngOnInit()//callled by implicityly as like constructor
  {
 this.carName=this.dataService.carName;
  }
}
