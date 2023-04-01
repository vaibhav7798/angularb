import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharactersonly]'
})
export class CharactersonlyDirective {

  constructor(private elementRef : ElementRef) { }
@HostListener('input',["$event"])

onInputBoxChange(event:any)
{
  console.log(event);
  
    var inputBoxInitialValue=this.elementRef.nativeElement.value;   
     this.elementRef.nativeElement.value=inputBoxInitialValue.replace(/[^a-zA-Z]*/g, '');
    }
}
