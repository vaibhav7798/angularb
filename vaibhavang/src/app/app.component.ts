import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vaibhavang';
  
  myName="vaibhav";//shortcut
  mySurname:string="kabade";//logcut
  myMiddleName? : string;

  constructor(private router:Router) //dependency injection->private router:Router //it is a just function and it will call implicitly by compiler 
  {
    console.log("inside constructor...");
   }

  test()
  {
    this.myMiddleName = 'Sanjay';
  }

   test1()
   {
    this.test();
   }

   redirectadmin() {
   
    this.router.navigateByUrl("/admin");  
  
  }

  redirectaboutus_details()
  {
    this.router.navigateByUrl('aboutus-module/aboutusdetails');
  }

}
