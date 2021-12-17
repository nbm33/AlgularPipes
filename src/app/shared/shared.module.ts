import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManuComponent } from './manu/manu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ManuComponent
  ],
  exports: [
    ManuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    RouterModule
  ]
})
export class SharedModule { }
