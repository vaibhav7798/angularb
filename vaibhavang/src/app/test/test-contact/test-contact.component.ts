import { Component } from '@angular/core';
import { DatatestService } from '../datatest.service';

@Component({
  selector: 'app-test-contact',
  templateUrl: './test-contact.component.html',
  styleUrls: ['./test-contact.component.scss']
})
export class TestContactComponent {

  constructor(private datatestService:DatatestService)
  {

  }

  mytitle!:string;
  funcall()
  {
    this.mytitle=this.datatestService.test();
  }

}
