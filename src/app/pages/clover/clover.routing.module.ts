import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { GatewaysComponent } from 'app/pages/clover/gateways/gateways.component';
import { GatewaysDetailsComponent } from 'app/pages/clover/gateways/details/gateways.details.component';
import { DockerLogsDetailsComponent } from 'app/pages/clover/gateways/details/dockerlogs/dockerlogs.details.component';
import { StatsDetailsComponent } from 'app/pages/clover/gateways/details/stats/stats.details.component';
import { GrafanaDetailsComponent } from 'app/pages/clover/gateways/details/grafana/grafana.details.component';

export const routes: Routes = [
  {
    path: 'gateways',
    component: GatewaysComponent,
  },
  {
    path: 'gateways/details/:id',
    component: GatewaysDetailsComponent,
  },
  {
    path: 'gateways/details/grafana/:id',
    component: GrafanaDetailsComponent,
  },
  {
    path: 'gateways/details/dockerlogs/:id',
    component: DockerLogsDetailsComponent,
  },
  {
    path: 'gateways/details/stats/:id',
    component: StatsDetailsComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CloverRoutingModule {}
