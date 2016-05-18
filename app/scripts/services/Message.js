(function() {
  function Message($firebaseArray) {
    var Message = {};

    var messageRef = new Firebase("https://torrid-fire-7225.firebaseio.com/messages");

    Message.getMessages = function(roomId) {
      var messages = $firebaseArray(messageRef.orderByChild('roomId').equalTo(roomId));
        console.log(messages);
        return messages;
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
