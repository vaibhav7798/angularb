import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-parent',
  templateUrl: './admin-parent.component.html',
  styleUrls: ['./admin-parent.component.scss']
})
export class AdminParentComponent {

 parentCityName:any;
 fruits=['apple','banana','kiwi'];
 car=['bmw','swift','audi'];
  parentData(event:any)
  {
     console.log("input box value",event.target.value);
      this.parentCityName=event.target.value;
  }

}
