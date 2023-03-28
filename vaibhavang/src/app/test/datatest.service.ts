import { Injectable } from '@angular/core';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class DatatestService {

  constructor(public dataService:DataService) 
  {
    
   }

 title='my web page';
   test()
   {
      return this.title;
   }
}
