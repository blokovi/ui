import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'environments/environment';
import { ActivatedRoute } from '@angular/router';
import { GatewaysService } from 'app/common/services/gateways/gateways.service';
import { NotificationsService } from 'app/common/services/notifications/notifications.service';
import { MessagesService } from 'app/common/services/messages/messages.service';
import { Gateway } from 'app/common/interfaces/gateway.interface';
import { Message } from 'app/common/interfaces/mainflux.interface';

@Component({
  selector: 'ngx-stats-details',
  templateUrl: './stats.details.component.html',
  styleUrls: ['./stats.details.component.scss'],
})
export class StatsDetailsComponent implements OnInit {
  gateway: Gateway = {
    name: '',
    key: '',
    id: '',
    metadata: {},
  };
  source: LocalDataSource = new LocalDataSource();
  messages: Message[];

  settings = {
    actions : {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      subtopic: {
        title: 'Subtopic'
      },  
      name: {
        title: 'Name'
      },
      time: {
        title: 'Time'
      },
      value: {
        title: 'Value'
      },      
    },
  };

  constructor(
    private route: ActivatedRoute,
    private gatewaysService: GatewaysService,
    private messagesService: MessagesService,
    private notificationsService: NotificationsService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.gatewaysService.getGateway(id).subscribe(
      gw => {
        this.gateway = <Gateway>gw;
        
        const exportChannelID: string = this.gateway.metadata ? this.gateway.metadata.exportChannelID : '';
    
        this.messagesService.getMessages(exportChannelID, this.gateway.key, this.gateway.id, ).subscribe(
          (respMsg: any) => {
            // this.messages = respMsg.messages || this.messages;
            this.source.load(respMsg.messages);
            this.source.refresh();
          }
        )
      },
      err => {
        this.notificationsService.error('Failed to fetch gateway',
          `Error: ${err.status} - ${err.statusText}`);
      },
    );




  }
}
