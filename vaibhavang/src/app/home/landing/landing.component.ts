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
  fruits!:any;
  fruits1!:any;
  
  constructor(private dataService:DataService)
 {

 }

 ngOnInit()//ng life cycle hook and called by implicitly
 {
       this.softwareCmp=this.dataService.softwareCmp;
       this.fruits=this.dataService.fruits="apple";
 }
  //data fetch from dataservices using button click
 getData()
 {
    this.data=this.dataService.data;
 }

 setData()
 {
   this.fruits1=this.dataService.fruits="orange";
 }
}
