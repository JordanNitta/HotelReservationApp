import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    //Export the Home Component if you want to use it in another module by exporting it
    HomeComponent
  ]
})
export class HomeModule { }
