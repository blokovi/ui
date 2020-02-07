/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
  usersUrl: '/users',
  usersVersionUrl: '/version',
  loginUrl: '/tokens',
  requestPassUrl: '/password/reset-request',
  resetPassUrl: '/password/reset',
  changePassUrl: '/password',
  thingsUrl: '/things',
  twinsUrl: '/twins',
  statesUrl: '/states',
  channelsUrl: '/channels',
  bootstrapConfigsUrl: '/bootstrap/things/configs',
  bootstrapUrl: '/bootstrap/things/bootstrap',
  connectUrl: '/connect',
  browseUrl: '/browse',

  writerChannelsUrl: '/writer/channels',
  readerChannelsUrl: '/reader/channels',

  grafanaHome: 'http://clover.mainflux.io/?orgId=1&kiosk',
  grafanaGateway: '&refresh=1m&var-datasource=InfluxDB-MAINFUX&var-inter=10s&var-mountpoint=All&var-cpu=All&var-disk=All&var-netif=All&var-server="',
  jaegerHome: 'http://localhost:16686/search',
  loraServer: 'http://lora.mainflux.io/#/',
};
