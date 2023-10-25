import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import {DisplayZeroPipe} from './exponent-pipe';
import { HeroService } from './hero-list/hero-list-service';
import { HighlightDirective } from './hilight.directive';

@NgModule({
  declarations: [
    HeroListComponent,
    DisplayZeroPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports : [
    HeroListComponent,
    DisplayZeroPipe,
    HighlightDirective
  ],
  providers : [
    HeroService
  ]
})

export class HeroesModule { }
