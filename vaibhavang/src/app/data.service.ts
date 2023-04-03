import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  carName='swift';
  city='i am live in Chalisgaon';
 softwareCmp='veritas software pvt ltd';
  fruits?:any;
  
 data={
   name:'vaibhav',
   age:28,
   address:'pune'
 }

//alternate way to get and set data to services

studentName='raj';
  formFullName!: any;

getStudentName()
{
  return this.studentName;
}

setStudentName(studentname:string)
{
  this.studentName=studentname;
}

 multiplication(num1:any,num2:any)
 {
     return num1 * num2; 
 }
constructor() { }


wordValidators(inputBoxValue:any) //this function will call when component load
{
 console.log('.....',inputBoxValue.value);
    let inputData=inputBoxValue.value?.toLowerCase(); 
 console.log('inputdata',inputData);
  let isInclude=inputData?.includes('title'); //includes method return true or false
  console.log('isInclude',isInclude);
  return isInclude ? {isvalid : true} :null;    
}

}
