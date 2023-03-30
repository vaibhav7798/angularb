import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
para:any=true; //para=undefined/false=false.   //ngIf directives
show:any=true;
item=[10,20,30,40,50];//*ngfor directives
studentData:boolean=true;
  student = [{   //*ngfor directives

    name: 'rahul',
    age: 20,
    hobby: 'cricket'
  },
  {
    name: 'rohit',
    age: 21,
    hobby: 'swimiing'
  },
  {
    name: 'pawan',
    age: 20,
    hobby: 'dancing'
  },
  {
    name: 'kalyan',
    age: 20,
    hobby: 'printing'
  }
  ]

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

imgshowhide:boolean=true;
showimg()
{
  this.imgshowhide=true;
}

hideimg()
{
  this.imgshowhide=false;
}

toggleimg()
{
  this.imgshowhide=!this.imgshowhide;
}

//ngswitch directives
color="green";

switchfun(color:any)
{
     this.color=color;
}

switchfun1(color:any)
{
    this.color=color;
}

//attribute directives
styleProperty="main2";
// stylePropertyNew=true;
// stylePropertyNew=undefined;
stylePropertyNew=555;

styleMultiple='kabade'; //multiplestyple apply
}
