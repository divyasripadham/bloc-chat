(function() {
     function HomeCtrl($scope, Room, $uibModal) {
        this.allRooms = Room.all;
        this.open = function() {
          var modalInstance = $uibModal.open({
            templateUrl: '/templates/modal.html',
            controller: 'ModalInstanceCtrl',
            size: 'sm',
          });
        };
        this.setActive = function(room) {
          $scope.activeRoom = room;
          console.log("room id "+$scope.activeRoom.$id);
        }
     }

     angular
         .module('blocChat')
         .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', HomeCtrl]);
 })();