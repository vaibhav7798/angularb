import { Component } from '@angular/core';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  title:string='vaibhav sanjay kabade';
  todayDate='3-31-2023'
  title1:string='VAIBHAV SANJAY KABADE';
  today=new Date();
  inputTextBox:any;
  amount=200;

  employeeData=[{
    name:'vaibhav',
    age:22,
    add:'Pune'
  },
  {
  name:'raj',
  age:20,
  add:'mumbai'},
]

}
