(function() {
  function BlocChatCookies($cookies, $rootScope, $uibModal) {
    currentUser = $cookies.get('blocChatCurrentUser');

    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/user_modal.html',
        controller: 'UserModalInstanceCtrl',
        size: 'sm',
      });
    } else {
      $rootScope.currentUser = currentUser;
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$rootScope', '$uibModal', BlocChatCookies]);
})();
