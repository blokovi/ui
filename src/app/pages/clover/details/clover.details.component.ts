import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-clover-details-access',
  templateUrl: './clover.details.component.html',
  styleUrls: ['./clover.details.component.scss'],
})
export class CloverDetailsComponent {
  // Depends on valuePrepareFunction
  value: any;

  constructor(
    private router: Router,
  ) { }

  onOpenDetailsPage() {
    this.router.navigate([`${this.router.routerState.snapshot.url}/details/${this.value.id}`]);
  }
  onOpenGrafanaPage() {
    this.router.navigate([`${this.router.routerState.snapshot.url}/details/grafana/${this.value.id}`]);
  }
  onOpenDockerLogsPage() {
    this.router.navigate([`${this.router.routerState.snapshot.url}/details/dockerlogs/${this.value.id}`]);
  }
  onOpenStatsPage() {
    this.router.navigate([`${this.router.routerState.snapshot.url}/details/stats/${this.value.id}`]);
  }
}
