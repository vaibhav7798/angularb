import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersonly]'
})
export class NumbersonlyDirective {

  constructor(private elementRef : ElementRef) { }
@HostListener('input',["$event"])

onInputBoxChange(event:any)
{
  console.log(event);
   console.log("numbers only directive..");
   
    var inputBoxInitialValue=this.elementRef.nativeElement.value;   
     this.elementRef.nativeElement.value=inputBoxInitialValue.replace(/[^0-9]*/g, '');
    }

}
