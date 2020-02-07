/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
  usersUrl: '/users',
  loginUrl: '/tokens',
  requestPassUrl: '/password/reset-request',
  resetPassUrl: '/password/reset',
  changePassUrl: '/password',
  thingsUrl: '/things',
  twinsUrl: '/twins',
  statesUrl: '/states',
  channelsUrl: '/channels',
  configUrl: '/bs/things/configs',
  bootstrapConfigsUrl: '/bs/things/configs',
  bootstrapUrl: '/bs/things/bootstrap',
  connectUrl: '/connect',
  browseUrl: '/browse',
  mqttHostname: '84.201.171.65',
  mqttWsHostname: 'clover.mainflux.io',
  mqttWsUrl: 'ws://clover.mainflux.io:80/mqtt',

  usersVersionUrl: '/version/users/version',
  thingsVersionUrl: '/version/things/version',
  normalizerVersionUrl: '/normalizer/version',
  httpVersionUrl: '/version/http/version',
  websocketVersionUrl: '/version/ws/version',
  writerVersionUrl: '/writer/version',
  writerChannelsUrl: '/writer/channels',
  readerVersionUrl: '/reader/version',
  readerChannelsUrl: '/reader/channels',

  grafanaHome: 'http://clover.mainflux.io/grafana',
  grafanaGateway: '&refresh=1m&var-datasource=InfluxDB-MAINFUX&var-inter=10s&var-mountpoint=All&var-cpu=All&var-disk=All&var-netif=All&var-server="',
  jaegerHome: 'http://84.201.180.9',
  loraServer: 'http://lora.mainflux.io/#/',
  nodeRedHome: 'http://localhost:1880',
};
