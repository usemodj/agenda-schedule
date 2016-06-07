'use strict';

angular.module('agendaScheduleApp.auth', [
  'agendaScheduleApp.constants',
  'agendaScheduleApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
