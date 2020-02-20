import { Component, Input } from '@angular/core';
import { GatewaysService } from 'app/common/services/gateways/gateways.service';
import { NotificationsService } from 'app/common/services/notifications/notifications.service';
import { MqttManagerService } from 'app/common/services/mqtt/mqtt.manager.service';
import { Service } from 'app/pages/clover/gateways/details/services/services.interface';
import { Message } from 'app/common/interfaces/mainflux.interface';
import { Gateway } from 'app/common/interfaces/gateway.interface';
import { interval } from 'rxjs';
import { LocalDataSource } from 'ng2-smart-table';
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
            name: 'run',
            title: '<i class="ion-android-arrow-dropright-circle" title="Run"></i>',
          },
          {
            name: 'connect',
            title: '<i class="ion-flash" title="Connect"></i>',
          },
        ],
        add: false,
        edit: false,
        delete: false,
        position:  'right',
        class: 'action-column',
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
    var ip =<String>event.data.Name
    this.mqttManagerService.publishToService(this.gateway.metadata.ctrlChannelID, 'adc', '1', event.action, ip.replace(/_/g, "."));
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
