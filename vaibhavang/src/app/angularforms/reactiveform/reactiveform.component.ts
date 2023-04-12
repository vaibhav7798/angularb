import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';
import { CommonApiCallService } from '../common-api-call.service';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent {
//step 1:import reactiveformmodule in module.ts file 

 studentdataForm!:FormGroup;   //here studentdataForm is property name and FormGroup is datatype  
 showPassword:boolean=false;
cities=['mumbai','pune','nashik','nagpur'];
password!:any;
confirmpassword!:any;
isMatched:boolean=false 
boxvalue:any; 
constructor(private formBuillder:FormBuilder,private dataService:DataService,private commonApiCallService:CommonApiCallService)
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
   title:['',[Validators.required,this.dataService.wordValidators]],
   city:[''],
   password:['',],
   confirmpassword:['']
  });
}

passwordvalidation(inputboxpassword:any)
{

  
  console.log('pass',inputboxpassword.target.value);
  this.password=inputboxpassword.target.value; 
   
  if(this.password==this.confirmpassword)
  {
     this.isMatched=false;//pass matched
  }
  else
  {
   this.isMatched=true;//pass not matched
  }

}

confirmpasswordvalidation1(confirmpassword:any)
{
   this.confirmpassword=confirmpassword.target.value;
   if(this.password==this.confirmpassword)
   {
      this.isMatched=false;//pass matched
   }
   else
   {
    this.isMatched=true;//pass not matched
   }
  }

submit()
{
  console.log('Form Data',this.studentdataForm.value);
   console.log('mobile number',this.studentdataForm.value.mobno);//patch update mb no
   
 //way 1 let mobileno=this.studentdataForm.value.mobno;

   let data={
    mobno:this.studentdataForm.value.mobno,
    name:this.studentdataForm.value.name
   }

  let endpoint="user";
 this.commonApiCallService.postApiCall(endpoint,this.studentdataForm.value).subscribe(Response=>{
          })

   //way 1 this.commonApiCallService.patchapicall('admin',{mobno:mobileno},2).subscribe(Response=>{
      this.commonApiCallService.patchapicall('admin',data,2).subscribe(Response=>{


    });      
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

  data(value:any)
  {
    console.log("input box value",value.target.value);
  }
  data1(value:any)
  {
    console.log("input box valu way 2",value);
  }
  data2()
  { 
   console.log("box value",this.boxvalue);
  }

// putApi()
// {
//   let data={
//     mobno:this.studentdataForm.value.mobno,
//     name:this.studentdataForm.value.name,
//     password:this.studentdataForm.value.password,   
//     confirmpassword:this.studentdataForm.value.confirmpassword    
//   }
//   this.commonApiCallService.putapicall("admin",data,1).subscribe(Response=>{

//   });
}




