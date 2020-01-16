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
  channelsUrl: '/channels',
  configUrl: '/bs/things/configs',
  bootstrapUrl: '/bs/things/bootstrap',
  connectUrl: '/connect',
  mqttHostname: '84.201.171.65',

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
  jaegerHome: 'http://84.201.180.9',
  loraServer: 'http://lora.mainflux.io/#/',
  nodeRedHome: 'http://localhost:1880',
};
