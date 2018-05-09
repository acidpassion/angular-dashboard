import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Angular FlexLayout */
import { FlexLayoutModule } from '@angular/flex-layout';

/* Angular Material */
import { PlunkerMaterialModule } from '../plunker-material.module';

@NgModule({
  imports: [FlexLayoutModule, PlunkerMaterialModule],
  declarations: [],
  exports: []
})
export class SharedModule {

}
