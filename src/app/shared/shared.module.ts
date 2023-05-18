import { NgModule } from '@angular/core';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';

@NgModule({
  exports: [
    SharedMaterialModule,
    SharedComponentsModule
  ]
})
export class SharedModule { }
