import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  ],
})
export class MaterialModule {
}
