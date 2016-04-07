'use strict';

var app = angular.module('cadeApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'bronco.html',
	})
	$urlRouterProvider.otherwise('/');
})