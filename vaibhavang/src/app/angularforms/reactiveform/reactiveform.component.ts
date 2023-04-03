import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent {
//step 1:import reactiveformmodule in module.ts file 

 studentdataForm!:FormGroup;   //here studentdataForm is property name and FormGroup is datatype  
 showPassword:boolean=false;
 constructor(private formBuillder:FormBuilder,private dataService:DataService)
{
  
}

ngOnInit()
{
  this.studentForm();
}

studentForm()
{
  this.studentdataForm=this.formBuillder.group({
  // name:['vaibhav'],
  name:['',[Validators.required,Validators.minLength(5)]],
   mobno:['',[Validators.required,Validators.pattern("[0-9]*$"),Validators.maxLength(10)]],
   tnc:[true,[Validators.requiredTrue]],
   lastname:['',[Validators.required,Validators.pattern("[a-zA-Z]*$")]],
   title:['',[Validators.required,this.dataService.wordValidators]]
  });
}
submit()
{
  console.log(this.studentdataForm.value);
}

showPasswordfunction()
{
  this.showPassword=!this.showPassword;
}

// wordValidators function gone in data service
// wordValidators(inputBoxValue:any) //this function will call when component load
// {
//  console.log('.....',inputBoxValue.value);
//     let inputData=inputBoxValue.value?.toLowerCase(); 
//  console.log('inputdata',inputData);
//   let isInclude=inputData?.includes('title'); //includes method return true or false
//   console.log('isInclude',isInclude);
//   return isInclude ? {isvalid : true} :null;    
  //}


}
