import { NgModule } from '@angular/core';
import { ThemeModule } from 'app/@theme/theme.module';
import {
  NbIconModule,
  NbButtonModule,
 } from '@nebular/theme';

import { DetailsComponent } from 'app/shared/details/details.component';
// import { GrafanaComponent } from 'app/pages/admin/grafana/grafana.component';

@NgModule({
  imports: [
    ThemeModule,
    NbIconModule,
    NbButtonModule,
  ],
  declarations: [
    DetailsComponent,
    // GrafanaComponent,
  ],
  entryComponents: [
    DetailsComponent,
    // GrafanaComponent,
  ],
})

export class DetailsModule { }
