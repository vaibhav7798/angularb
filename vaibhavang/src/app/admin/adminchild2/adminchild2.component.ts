import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-adminchild2',
  templateUrl: './adminchild2.component.html',
  styleUrls: ['./adminchild2.component.scss']
})
export class Adminchild2Component {

  @Input() citynamechild2:any;
  @Input()  cars:any;
}
