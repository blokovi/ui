import { Component, Input } from '@angular/core';
import { MqttManagerService } from 'app/common/services/mqtt/mqtt.manager.service';
import { Service } from 'app/pages/clover/gateways/details/services/services.interface';
import { Message } from 'app/common/interfaces/mainflux.interface';
import { Gateway } from 'app/common/interfaces/gateway.interface';
import { interval, Subscription } from 'rxjs';
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
  private subscription: Subscription = new Subscription();

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
    const ip =<String>event.data.Name;
    this.mqttManagerService.publishToService(this.gateway.metadata.ctrlChannelID, 'adc', '1', event.action, ip.replace(/_/g, '.'));
  }

  constructor(
    private mqttManagerService: MqttManagerService,
  ) {

    const poller = interval(10000);
    // Subscribe to begin publishing values
    this.subscription.add( poller.subscribe(n => {
        this.mqttManagerService.publish(this.gateway.metadata.ctrlChannelID, '1', 'service', 'view');
    }));

    this.subscription.add(this.mqttManagerService.messageChange.subscribe(
        (message: Message) => {
          this.services = <Service[]>JSON.parse(message.vs.toString())
        },
      ));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
