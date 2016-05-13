(function() {
     function ModalCtrl($scope, Room, $uibModal) {
        var ctrl = this;
        ctrl.open = function(){
          var modalInstance = $uibModal.open({
            templateUrl: '/templates/modal.html',
            controller: 'ModalInstanceCtrl',
            size: 'sm',
            resolve: {
              items: function () {
                return $scope.items;
              }
            }
          });

          console.log("inside open function-modalInstance"+modalInstance);

        };
     }

     angular
         .module('blocChat')
         .controller('ModalCtrl', ['$scope', 'Room', '$uibModal', ModalCtrl]);
})();
