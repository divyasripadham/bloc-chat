(function() {
  function Room($firebaseArray) {
    var Room = {};

    var firebaseRef = new Firebase("https://torrid-fire-7225.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));
    var messages = $firebaseArray(firebaseRef.child('messages').orderByChild('roomId').equalTo('room1'));

    Room.all = rooms;
    Room.addRoom = function(newRoom) {
        rooms.$add(newRoom);
    };
    Room.getMessages = function(roomId) {
      // var messages = $firebaseArray(firebaseRef.child('messages').orderByChild('roomId').equalTo(roomId));
        console.log(messages);
    };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
