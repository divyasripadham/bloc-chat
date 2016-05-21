(function() {
  function Message($firebaseArray) {
    var Message = {};

    var messageRef = new Firebase("https://torrid-fire-7225.firebaseio.com/messages");

    Message.getMessages = function(roomId) {
      var messages = $firebaseArray(messageRef.orderByChild('roomId').equalTo(roomId));
      return messages;
    };

    Message.sendMessage = function(newMessage) {
      //set timestamp before saving message
      newMessage.createdAt = Firebase.ServerValue.TIMESTAMP;
      var messagesArr = $firebaseArray(messageRef);
      messagesArr.$add(newMessage);
    }

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
