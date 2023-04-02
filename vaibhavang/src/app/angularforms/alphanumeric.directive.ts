import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphanumeric]'
})
export class AlphanumericDirective {

  constructor(private elementRef : ElementRef) { }
@HostListener('input',["$event"])

onInputBoxChange(event:any)
{
  console.log(event);
  
    var inputBoxInitialValue=this.elementRef.nativeElement.value;   
     this.elementRef.nativeElement.value=inputBoxInitialValue.replace(/[^a-zA-Z0-9-, ]*/g, '');
    }


}
