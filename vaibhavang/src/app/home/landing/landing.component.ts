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
  studentName1?:string;

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

  getStudentName()
  {
    this.studentName1=this.dataService.getStudentName();
   console.log(this.studentName1);
  }

  setstudentname()
  { 
    let studentname='rahul';
    this.dataService.setStudentName(studentname);
    console.log(this.dataService.studentName);
    
  }
 
  multiplication()
  { 
    let res=this.dataService.multiplication(20,30);
    console.log("multiplicatin is:"+res);
    
  }

}
