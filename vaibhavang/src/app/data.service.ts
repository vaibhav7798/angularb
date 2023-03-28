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
 constructor() { }
}
