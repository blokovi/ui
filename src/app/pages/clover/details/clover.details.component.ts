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
    this.router.navigate([`/pages/things/${this.value.type}/grafana/${this.value.id}`]);
  }
  onOpenDockerLogsPage() {
    this.router.navigate([`/pages/things/${this.value.type}/dockerlogs/${this.value.id}`]);
  }
}
