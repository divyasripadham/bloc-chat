(function() {
  function Room($firebaseArray) {
    var Room = {};

    var roomRef = new Firebase("https://torrid-fire-7225.firebaseio.com/rooms");
    var rooms = $firebaseArray(roomRef);

    Room.all = rooms;
    Room.addRoom = function(newRoom) {
        rooms.$add(newRoom);
    };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
