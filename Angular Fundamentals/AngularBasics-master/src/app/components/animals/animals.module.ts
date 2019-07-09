import { NgModule } from '@angular/core';

import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';

@NgModule({
  declarations: [
    DogComponent,
    CatComponent
  ],
  imports: [],
  exports: [
    DogComponent,
    CatComponent
  ]
})
export class AnimalsModule { }