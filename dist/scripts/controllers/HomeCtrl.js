(function() {
     function HomeCtrl($scope, Room, $uibModal) {
        this.allRooms = Room.all;
        this.open = function(){
          var modalInstance = $uibModal.open({
            templateUrl: '/templates/modal.html',
            controller: 'ModalInstanceCtrl',
            size: 'sm',
          });
        };
     }

     angular
         .module('blocChat')
         .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', HomeCtrl]);
 })();
