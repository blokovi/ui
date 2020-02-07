import { NgModule } from '@angular/core';
import { ThemeModule } from 'app/@theme/theme.module';
import {
  NbIconModule,
  NbButtonModule,
 } from '@nebular/theme';

import { CloverDetailsComponent } from 'app/pages/clover/details/clover.details.component';

@NgModule({
  imports: [
    ThemeModule,
    NbIconModule,
    NbButtonModule,
  ],
  declarations: [
    CloverDetailsComponent,
  ],
  entryComponents: [
    CloverDetailsComponent,
  ],
})

export class CloverDetailsModule { }
