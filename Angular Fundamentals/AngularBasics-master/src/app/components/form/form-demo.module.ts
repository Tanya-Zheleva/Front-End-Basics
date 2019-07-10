import { NgModule } from '@angular/core';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FormDemoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    FormDemoComponent,
    CommonModule
  ]
})
export class FormDemoModule { }
