import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.scss']
})
export class LifecyclehooksComponent {

@Input() parentdata:any;//called:bound inputs

data="vaibhav";
constructor(){}


//8 life cycle hoooks:ngOnChanges,ngOnInit,ngDoCheck,ngAfterContentInit,ngAfterContentChecked,
//ngAfterViewInit,ngAfterViewChecked,ngOnDestory.
ngOnInit()
{
  console.log("ngOnInit chlid....");
  
}

ngOnChanges()
{
  //ngOnChanges :Called before ngOnInit() (if the component has bound inputs) and whenever one or more data-bound input properties change.
  console.log("ngOnChanges.child..");
  
}

ngDoCheck()
{
  console.log("ngDoCheck..child..");
  
}
}
