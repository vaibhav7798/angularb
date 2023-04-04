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
cities=['mumbai','pune','nashik','nagpur'];
password!:any;
confirmpassword!:any;
isMatched:boolean=false 

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
