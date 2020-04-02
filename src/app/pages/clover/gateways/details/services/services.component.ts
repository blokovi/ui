import { Component, Input, OnDestroy } from '@angular/core';
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

export class ServicesComponent implements OnDestroy  {
  offset = 0;
  limit = 20;
  total = 0;
  services: Service[];
  serviceServices: Service[];
  serviceDevices: Service[];
  @Input() gateway: Gateway;
  private subscription: Subscription = new Subscription();
  private initialized: boolean = false;

  settings = {

    actions: {
        custom: [
          {
            name: 'run',
            title: '<i class="ion-play" title="Run"></i>',
          },
          {
            name: 'stop',
            title: '<i class="ion-stop" title="Stop"></i>',
          },
          {
            name: 'stat',
            title: '<i class="ion-upload" title="Stat"></i>',
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
    const ip = <String>event.data.Name;
    this.mqttManagerService.publishToService(this.gateway.metadata.ctrlChannelID, 'adc', '1', event.action, ip.replace(/_/g, '.'));
  }

  constructor(
    private mqttManagerService: MqttManagerService,
  ) {

  
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnChanges() {
    if (!this.gateway.name){
      return;
    }

    this.mqttManagerService.publish(this.gateway.metadata.ctrlChannelID, '1', 'service', 'view');

    if (!this.initialized){
      this.subscription.add(this.mqttManagerService.messageChange.subscribe(
        (message: Message) => {
          console.log ('message:', message);
          this.services = <Service[]>JSON.parse(message.vs.toString());
          this.serviceServices = this.services.filter(svc => svc.Type === 'service');
          this.serviceDevices = this.services.filter(svc => svc.Type === 'device');
          console.log ('this.services:', this.services);
          console.log ('this.serviceDevices:', this.serviceDevices);
          console.log ('this.serviceServices:', this.serviceServices);

        },
      ));
      const poller = interval(10000);

      // Subscribe to begin publishing values
      this.subscription.add( poller.subscribe(n => {
          this.mqttManagerService.publish(this.gateway.metadata.ctrlChannelID, '1', 'service', 'view');
      }));
      this.initialized = true;
    }
  }
}
