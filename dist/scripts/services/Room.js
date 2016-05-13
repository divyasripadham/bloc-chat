(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("https://torrid-fire-7225.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));
    return {
      all: rooms,
      addRoom: function(newRoom) {
        rooms.$add(newRoom);
      },
      addMessage: function(roomId, message) {

      },
      getMessages: function(roomId) {

      }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();