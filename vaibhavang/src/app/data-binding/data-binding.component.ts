import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent
{
  mahadev=["shri","shivay","namashtubhyam"];
  data=[100,200,300,400];

   myName="vaibhav";
   disabled=false;

   city="chalisgaon";

   no=70;

   surName="kabade";
   getValue()
   {
      return "function retun value";
   }

   changesurName()
   {
        return this.surName;
   }





  }

