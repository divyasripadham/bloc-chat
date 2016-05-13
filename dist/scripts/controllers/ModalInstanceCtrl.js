(function() {
     function ModalInstanceCtrl($scope, Room, $uibModalInstance) {
         $scope.title = "Create new room";
         $scope.ok = function () {
           console.log("inside instance ok function");
           Room.addRoom($scope.newRoom);
           $uibModalInstance.close('close');
         };

         $scope.cancel = function () {
           console.log("inside instance cancel function");
           $uibModalInstance.dismiss('cancel');
         };
     }

     angular
         .module('blocChat')
         .controller('ModalInstanceCtrl', ['$scope', 'Room','$uibModalInstance', ModalInstanceCtrl]);
})();
