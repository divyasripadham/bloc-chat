(function() {
     function HomeCtrl($scope, $rootScope, Room, Message, $uibModal) {
        var ctrl = this;
        ctrl.allRooms = Room.all;
        ctrl.open = function() {
          var modalInstance = $uibModal.open({
            templateUrl: '/templates/modal.html',
            controller: 'ModalInstanceCtrl',
            size: 'sm',
          });
        };
        ctrl.getMessagesFor = function(room) {
          $scope.activeRoom = room;
          ctrl.messages = Message.getMessages($scope.activeRoom.$id);
        }
        ctrl.sendMessage = function() {
          console.log("send message,room id "+$scope.activeRoom.$id);
          console.log("content "+$scope.newMessage.content);
          $scope.newMessage.roomId = $scope.activeRoom.$id;
          $scope.newMessage.username = $rootScope.currentUser;
          console.log("content roomid "+$scope.newMessage.roomId);
          console.log("content username "+$scope.newMessage.username);
          Message.sendMessage($scope.newMessage);
          $scope.newMessage = "";
        }
     }

     angular
         .module('blocChat')
         .controller('HomeCtrl', ['$scope', '$rootScope', 'Room', 'Message', '$uibModal', HomeCtrl]);
 })();
