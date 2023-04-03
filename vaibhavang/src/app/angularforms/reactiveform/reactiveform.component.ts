import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent {
//step 1:import reactiveformmodule in module.ts file 

 studentdataForm!:FormGroup;   //here studentdataForm is property name and FormGroup is datatype  

 constructor(private formBuillder:FormBuilder)
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
   mobno:['',[Validators.required,Validators.pattern("[0-9]*$")]],
   tnc:['',[]]
  });
}
submit()
{
  console.log(this.studentdataForm.value);
  
}
}
