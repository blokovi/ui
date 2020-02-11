import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GatewaysService } from 'app/common/services/gateways/gateways.service';
import { NotificationsService } from 'app/common/services/notifications/notifications.service';
import { Service } from 'app/pages/clover/gateways/details/services/services.interface'
import { Gateway } from 'app/common/interfaces/gateway.interface';
import { Message } from 'app/common/interfaces/mainflux.interface';
import { MqttManagerService } from 'app/common/services/mqtt/mqtt.manager.service';
import { interval } from 'rxjs';

import { SelectMultipleControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'ngx-dockerlogs-details',
  templateUrl: './dockerlogs.details.component.html',
  styleUrls: ['./dockerlogs.details.component.scss'],
})
export class DockerLogsDetailsComponent implements OnInit {
  // @Input() gateway: Gateway;
  logs: string;  
  gateway: Gateway = {
    name: '',
    metadata: {},
  };

  mfxAgent = true;

  // constructor(
  //   private route: ActivatedRoute,
  //   private gatewaysService: GatewaysService,
  //   private notificationsService: NotificationsService,
  //   private mqttManagerService: MqttManagerService,
  // ) { }

//   ngOnInit() {
//     const id = this.route.snapshot.paramMap.get('id');
//     this.gatewaysService.getGateway(id).subscribe(
//       gw => {
//         this.gateway = <Gateway>gw;
//         if (this.mfxAgent) {
//           this.mqttManagerService.init(
//             this.gateway.id,
//             this.gateway.key,
//             this.gateway.metadata.ctrlChannelID,
//           );
//         }
//       },
//       err => {
//         this.notificationsService.error('Failed to fetch gateway',
//           `Error: ${err.status} - ${err.statusText}`);
//       },
//     );
//   }

//   ngOnDestroy() {
//     if (this.mfxAgent) {
//       this.mqttManagerService.disconnect();
//     }
//   }
// }

  constructor(
    private gatewaysService: GatewaysService,
    private notificationsService: NotificationsService,
    private mqttManagerService: MqttManagerService,
  ) {


    // const poller = interval(10000);
    // // Subscribe to begin publishing values
    // poller.subscribe(n => {
        this.mqttManagerService.publish(this.gateway.metadata.ctrlChannelID, '1', 'service', 'view');
    // })

    const mcSub = this.mqttManagerService.messageChange.subscribe(
      (message: Message) => {
        this.logs = JSON.parse(message.vs.toString());
        console.log('logs: ', this.logs);
       },
    );


  }

  ngOnInit() {
    // this.mqttManagerService.publish(this.gateway.metadata.ctrlChannelID, '1', 'exec', 'docker, logs, mainflux-ws');  

  } 
}