import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
para:any=true; //para=undefined/false=false.
show:any=true;

hide()
{
  this.show=false;
}

show1()
{
this.show=true;
}

togglehideshow()
{
  this.show=!this.show;
}
}
