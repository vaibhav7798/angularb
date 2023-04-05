import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooksparent',
  templateUrl: './lifecyclehooksparent.component.html',
  styleUrls: ['./lifecyclehooksparent.component.scss']
})
export class LifecyclehooksparentComponent {

  test="lifecyclehooks";

ngOnInit()
{
  console.log("ngOnInit...parent.");
  
}
ngOnChanges()
{
  console.log("ngOnChanges...parent.");
  
}



}
