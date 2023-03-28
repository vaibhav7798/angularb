import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  softwareCmp?:string;
  data:any;
  constructor(private dataService:DataService)
 {

 }

 ngOnInit()//ng life cycle hook and called by implicitly
 {
       this.softwareCmp=this.dataService.softwareCmp;
 }
  //data fetch from dataservices using button click
 showData()
 {
    this.data=this.dataService.data;
 }
}
