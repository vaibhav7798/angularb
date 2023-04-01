import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number,searchBoxAmount:number): any {
    console.log(value);
    
    // return value *100;   static
    
  
    if(!value)   //dynamic 
    {
      return null;
    }
    return value*100;
  }

}
