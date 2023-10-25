import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import {DisplayZeroPipe} from './exponent-pipe';

@NgModule({
  declarations: [
    HeroListComponent,
    DisplayZeroPipe 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports : [
    HeroListComponent,
    DisplayZeroPipe
  ]
})

export class HeroesModule { }
