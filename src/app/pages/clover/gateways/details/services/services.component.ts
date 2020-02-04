import { Component, Input } from '@angular/core';
import { GatewaysService } from 'app/common/services/gateways/gateways.service';
import { NotificationsService } from 'app/common/services/notifications/notifications.service';
import { MqttManagerService } from 'app/common/services/mqtt/mqtt.manager.service';
import { Service } from 'app/pages/clover/gateways/details/services/services.interface'
import { Message } from 'app/common/interfaces/mainflux.interface';
import { Gateway } from 'app/common/interfaces/gateway.interface';
import { interval } from 'rxjs';
import { LocalDataSource } from 'ng2-smart-table';
import { debug } from 'util';
@Component({
  selector: 'ngx-services-info',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})

export class ServicesComponent  {
  offset = 0;
  limit = 20;
  total = 0;
  services: Service[];
  @Input() gateway: Gateway;

  source: LocalDataSource = new LocalDataSource();

  settings = {
    
    actions: {
        custom: [
          {
            name: 'runAction',
            title: '<i class="ion-android-arrow-dropright-circle" title="Run"></i>'
          },
          {
            name: 'connectAction',
            title: '<i class="ion-flash" title="Connect"></i>'
          },
        ],
        add: false,
        edit: false,
        delete: false,
        position:  "right",
        class: "action-column",
      },
  
    columns: {
      Name: {
        title: 'Name',
        type: 'text',
        placeholder: 'Search name',
        editable: false,
        filter: false,
      },
      LastSeen: {
        title: 'Last Seen',
        type: 'text',
        placeholder: 'Search name',
        editable: false,
        filter: false,
      },
      Status: {
        title: 'Status',
        type: 'text',
        placeholder: 'Search name',
        editable: false,
        filter: false,
      }, 
    },
    pager: {
      display: true,
      perPage: 6,
    },
  };
  onCustom(event) {
    console.log('event is', event);
    // alert(`Custom event '${event.action}' fired on row N: ${event.data.id}`)
    this.mqttManagerService.publish(this.gateway.metadata.ctrlChannelID, '1', 'connect', '127.0.0.1:8081');
  }

  constructor(
    private gatewaysService: GatewaysService,
    private notificationsService: NotificationsService,
    private mqttManagerService: MqttManagerService,
  ) { 

    const poller = interval(10000);
    // Subscribe to begin publishing values
    poller.subscribe(n => {
        this.mqttManagerService.publish(this.gateway.metadata.ctrlChannelID, '1', 'service', 'view');
    })

    const mcSub = this.mqttManagerService.messageChange.subscribe(
        (message: Message) => {
          this.services = <Service[]>JSON.parse(message.vs.toString())
          this.source.load(this.services)
          this.source.refresh()
        },
      );
  }
}
