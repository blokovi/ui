import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  NbButtonModule,
  NbCardModule,
  NbSelectModule,
  NbInputModule,
  NbListModule,
  NbCheckboxModule,
} from '@nebular/theme';

import { CloverRoutingModule } from "./clover.routing.module";
import { PagesModule } from 'app/pages/pages.module';
import { ConfirmationComponent } from 'app/shared/confirmation/confirmation.component';

import { GatewaysComponent } from 'app/pages/clover/gateways/gateways.component';
import { GatewaysDetailsComponent } from 'app/pages/clover/gateways/details/gateways.details.component';
import { GrafanaDetailsComponent } from 'app/pages/clover/gateways/details/grafana/grafana.details.component';
import { DockerLogsDetailsComponent } from 'app/pages/clover/gateways/details/dockerlogs/dockerlogs.details.component';
import { ServicesComponent } from './gateways/details/services/services.component';
import { CloverDetailsComponent } from 'app/pages/clover/details/clover.details.component';
import { CloverDetailsModule } from 'app/pages/clover/details/clover.details.module';


@NgModule({
  imports: [
    CloverRoutingModule,
    PagesModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule,
    NbInputModule,
    NbListModule,
    NbCheckboxModule,
    FormsModule,
    CloverDetailsModule,
  ],
  declarations: [
    GatewaysComponent,
    GatewaysDetailsComponent,
    ServicesComponent,
    GrafanaDetailsComponent,
    DockerLogsDetailsComponent,
  ],
  entryComponents: [
    ConfirmationComponent,
    CloverDetailsComponent,
  ],
  exports: [
    CloverDetailsModule,
  ]
})
export class CloverModule { }
