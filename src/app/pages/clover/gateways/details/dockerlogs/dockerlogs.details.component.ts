import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-dockerlogs-details',
  templateUrl: './dockerlogs.details.component.html',
  styleUrls: ['./dockerlogs.details.component.scss'],
})
export class DockerLogsDetailsComponent implements OnInit {
  iframeGrafana: any;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
 
  }
}