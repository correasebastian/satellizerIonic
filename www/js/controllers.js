var au;
angular.module('starter.controllers', [])


.controller('LoginCtrl', function($scope, $ionicPopup, $auth, $state) {
    au = $auth;

    $scope.authenticate = function(provider) {
        $auth.authenticate(provider)
            .then(function(res) {
                console.log('$scope.authenticate', res);
                $ionicPopup.alert({
                        title: 'Success',
                        content: 'You have successfully logged in!'
                    })
                    .then(function(res) {
                        $state.go('tab.dash')
                    })
            })
            .catch(function(response) {
                $ionicPopup.alert({
                    title: 'Error',
                    content: response.data ? response.data || response.data.message : response
                })

            });
    };




    $scope.isAuthenticated = function() {
        return $auth.isAuthenticated();
    };
})

.controller('DashCtrl', function($scope, Chats, $http, $auth, $state) {
    $scope.test = function() {
        $http.get('/name')
            .then(function(res) {
                console.log(res)
            })
            .catch(function(err) {
                console.error(err)
            })
    }

    $scope.logout = function() {
        $auth.logout().then(function() {
            $state.go('login')
        })
    };
})

.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
