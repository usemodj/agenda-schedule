'use strict';

angular.module('agendaScheduleApp', [
  'agendaScheduleApp.auth',
  'agendaScheduleApp.admin',
  'agendaScheduleApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
