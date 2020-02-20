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
  mqttWsUrl: 'wss://clover.mainflux.io/mqtt',

  usersVersionUrl: '/version/users/version',
  thingsVersionUrl: '/version/things/version',
  normalizerVersionUrl: '/normalizer/version',
  httpVersionUrl: '/version/http/version',
  websocketVersionUrl: '/version/ws/version',
  writerVersionUrl: '/writer/version',
  writerChannelsUrl: '/writer/channels',
  readerVersionUrl: '/reader/version',
  readerChannelsUrl: '/reader/channels',

  grafanaHome: 'https://clover.mainflux.io/grafana/?orgId=1&kiosk',
  grafanaLoginURL: 'https://clover.mainflux.io/grafana/login',
  grafanaUsername: 'admin',
  grafanaPassword: 'pU9kNSwu6kKGZzwr',
  grafanaGateway: 'https://clover.mainflux.io/grafana/d/000000127/telegraf-system-dashboard?orgId=1&kiosk&refresh=1m&var-datasource=InfluxDB-MAINFUX&var-inter=10s&var-mountpoint=All&var-cpu=All&var-disk=All&var-netif=All&var-server=',
  jaegerHome: 'https://84.201.151.105',
  loraServer: 'http://lora.mainflux.io/#/',
  nodeRedHome: 'http://localhost:1880',
};
