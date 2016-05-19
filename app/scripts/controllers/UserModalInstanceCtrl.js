(function() {
     function UserModalInstanceCtrl($scope, $rootScope, $cookies, $uibModalInstance) {
         $scope.title = "Set a username";
         $scope.ok = function () {
           console.log("inside cookie modal instance ok function");
           if(typeof $scope.username != 'undefined') {
             console.log($scope.username);
             $cookies.put('blocChatCurrentUser', $scope.username);
             $rootScope.currentUser = $scope.username;
             $uibModalInstance.close('close');
           }
         };
     }

     angular
         .module('blocChat')
         .controller('UserModalInstanceCtrl', ['$scope', '$rootScope', '$cookies', '$uibModalInstance', UserModalInstanceCtrl]);
})();
