(function() {
     function config($stateProvider, $locationProvider) {
       $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider
         .state('home', {
           url: '/',
           controller: 'HomeCtrl as home',
           templateUrl: '/templates/home.html'
         })
         .state('modalInstance', {
            url: '/',
            controller: 'ModalInstanceCtrl as modalInstance',
            templateUrl: '/templates/modal.html'
         })
         .state('userModalInstance', {
            url: '/',
            controller: 'UserModalInstanceCtrl as userModalInstance',
            templateUrl: '/templates/user_modal.html'
         });
     }

     angular
         .module('blocChat', ['ui.router','firebase','ui.bootstrap','ngCookies'])
         .config(config);
 })();
