function JukeBox() {
  // this.play
}

JukeBox.prototype.start = function() {
    $("#play").click(
        function() {
            document.getElementById('player').play();

        }
    );
    $("#pause").click(
        function() {
            document.getElementById('player').pause();


        }
    );
    var songs = [
        "mp3/U2 - With Or Without You.mp3",
        "mp3/Imagine Dragons - Believer (Audio) copy.mp3",
        "mp3/James Arthur - Say You Won't Let Go.mp3"
        ];
    //
    $("#nextSong").click(
        function() {
            var player = document.getElementById('player');
            player.src = _.sample(songs);
            player.play();
        }
    );

};

myJukeBox = new JukeBox();
myJukeBox.start();
