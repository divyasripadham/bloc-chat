(function() {
     function HomeCtrl() {
        this.title = "Bloc Chat!";
     }

     angular
         .module('blocChat')
         .controller('HomeCtrl', HomeCtrl);
 })();
