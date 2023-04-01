import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersonlyDirective } from '../charactersonly.directive';
import { NumbersonlyDirective } from '../angularforms/numbersonly.directive';



@NgModule({
  declarations: [
    CharactersonlyDirective,
    NumbersonlyDirective,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    CharactersonlyDirective,
    NumbersonlyDirective
  ]
})
export class SharedModule { }
