import { Component, EventEmitter, Input, Output} from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
   carName!:string;
  
   @Input() cname:any; //use for parent child data transmission
   @Input() fruits:any;//use for parent child data transmission
   @Input() table:any;
   @Output() childdata=new EventEmitter<any>();//use for child to parent data transmission



   favFruits(event:any)
   {
    console.log("input box child value",event.target.value);
    let data=event.target.value;
    this.childdata.emit(data);
    //this.childdata.emit(event.target.value);
   
  }



   constructor(private dataService:DataService)
  {
  }


  ngOnInit()//callled by implicityly as like constructor
  {
 this.carName=this.dataService.carName;
  }
}
