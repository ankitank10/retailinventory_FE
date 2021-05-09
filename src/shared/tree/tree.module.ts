import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree/tree.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TreeComponent],
  imports: [
    CommonModule
  ],
  exports: [TreeComponent]
})
export class TreeModule { }
