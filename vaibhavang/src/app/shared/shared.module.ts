import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersonlyDirective } from '../charactersonly.directive';
import { NumbersonlyDirective } from '../angularforms/numbersonly.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CharactersonlyDirective,
    NumbersonlyDirective,

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CharactersonlyDirective,
    NumbersonlyDirective
  ]
})
export class SharedModule { }
