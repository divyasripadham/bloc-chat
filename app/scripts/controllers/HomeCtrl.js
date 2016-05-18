(function() {
     function HomeCtrl($scope, Room, Message, $uibModal) {
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
          console.log("room id "+$scope.activeRoom.$id);
          ctrl.messages = Message.getMessages($scope.activeRoom.$id);
        }
     }

     angular
         .module('blocChat')
         .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', HomeCtrl]);
 })();
