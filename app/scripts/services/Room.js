(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("https://torrid-fire-7225.firebaseio.com/");
    /**
    * @desc Gets the list of rooms. Uses the $firebaseArray service to ensure the data is returned as an array.
    * @type {Array}
    */
    var rooms = $firebaseArray(firebaseRef.child('rooms'));
    return {
      all: rooms,
      addRoom: function() {
        //use $add() to create a new room here.
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
