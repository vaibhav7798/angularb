import { Component } from '@angular/core';
import { CommonApiCallService } from '../angularforms/common-api-call.service';
@Component({
  selector: 'app-applicationlanding',
  templateUrl: './applicationlanding.component.html',
  styleUrls: ['./applicationlanding.component.scss']
})
export class ApplicationlandingComponent {

  constructor(private commonApiCallService:CommonApiCallService)
{

}

  deletebyid()
  {
    this.commonApiCallService.deleteapicall("user",3).subscribe(Response=>{
        
    })   
  }



}
