// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'satellizer', 'starter.controllers', 'starter.services', 'fakeBE'])

.run(function($ionicPlatform, $rootScope, $state, $ionicPopup,AUTH_EVENTS,$auth) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });

        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            debugger;
            console.error('$stateChangeError', error)
            if (error === 'notAuth')
                $state.go('login')
        });

        $rootScope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
            debugger
            var alertPopup = $ionicPopup.alert({
                title: 'Session Expired!',
                template: 'Sorry, You have to login again.'
            });
            $auth.logout().then(function() {
                $state.go('login')
            })


        });


        //puedo intentar dos cosas, el login page no es gran cosa, entonces puedo hacer lo siguiente
        //1 cahe=false en esa vista y siempre limpiar el historial
        //2 cache true y usar viewlifecycle para limpiar el historial
        /*       $ionicPlatform.registerBackButtonAction(function(event) {
                   if (true) { // your check here
                       $ionicPopup.confirm({
                           title: 'System warning',
                           template: 'are you sure you want to exit?'
                       }).then(function(res) {
                           if (res) {
                               ionic.Platform.exitApp();
                           }
                       })
                   }
               }, 100);*/
    })
    .config(function($authProvider) {
        var commonConfig = {
            popupOptions: {
                location: 'no',
                toolbar: 'yes',
                width: window.screen.width,
                height: window.screen.height
            }
        };

        if (ionic.Platform.isIOS() || ionic.Platform.isAndroid()) {
            commonConfig.redirectUri = 'http://localhost:8100/';
        }

        $authProvider.facebook(angular.extend({}, commonConfig, {
            clientId: '562507727240991'
                /*,
                      url: 'http://localhost:8100/auth/facebook'*/
        }));

        $authProvider.twitter(angular.extend({}, commonConfig, {
            url: 'http://localhost:3000/auth/twitter'
        }));

        $authProvider.google(angular.extend({}, commonConfig, {
            clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com',
            url: 'http://localhost:3000/auth/google'
        }));
    })

.config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

        // setup an abstract state for the tabs directive
            .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html',
            resolve: {
                isAuth: ['$auth', '$q', function($auth, $q) {
                    if ($auth.isAuthenticated())
                        return $q.when();
                    return $q.reject('notAuth')


                }]
            }
        })

        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'

        })

        // Each tab has its own nav history stack:

        .state('tab.dash', {
            url: '/dash',
            views: {
                'tab-dash': {
                    templateUrl: 'templates/tab-dash.html',
                    controller: 'DashCtrl'
                }
            }
        })

        .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/tab-chats.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.chat-detail', {
                url: '/chats/:chatId',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/chat-detail.html',
                        controller: 'ChatDetailCtrl'
                    }
                }
            })

        .state('tab.account', {
            url: '/account',
            views: {
                'tab-account': {
                    templateUrl: 'templates/tab-account.html',
                    controller: 'AccountCtrl'
                }
            }
        });

        // if none of the above states are matched, use this as the fallback
        // $urlRouterProvider.otherwise('/tab/dash');

        $urlRouterProvider.otherwise(function($injector, $location) {
            var $state = $injector.get("$state");
            $state.go("tab.dash");
        });

    })
    .constant('AUTH_EVENTS', {
        notAuthenticated: 'auth-not-authenticated'
    })

.factory('AuthInterceptor', function($rootScope, $q, AUTH_EVENTS) {
    return {
        responseError: function(response) {
            console.error('AuthInterceptor')
            $rootScope.$broadcast({
                401: AUTH_EVENTS.notAuthenticated,
            }[response.status], response);
            return $q.reject(response);
        }
    };
})

.config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
});
