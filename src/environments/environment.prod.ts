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
  configUrl: '/config',
  bootstrapUrl: '/bs',
  connectUrl: '/connect',

  usersVersionUrl: '/users/version',
  thingsVersionUrl: '/things/version',
  normalizerVersionUrl: '/normalizer/version',
  httpVersionUrl: '/http/version',
  websocketVersionUrl: '/ws/version',
  writerVersionUrl: '/writer/version',
  writerChannelsUrl: '/writer/channels',
  readerVersionUrl: '/reader/version',
  readerChannelsUrl: '/reader/channels',

  grafanaHome: 'http://clover.mainflux.io/grafana',
  jaegerHome: 'http://84.201.180.9',
  loraServer: 'http://lora.mainflux.io/#/',
  nodeRedHome: 'http://localhost:1880',
};
