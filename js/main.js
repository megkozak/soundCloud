function JukeBox() {
  this.play = function() {
    this.player().play();
  }
  this.pause = function() {
      this.player().pause();
  }
  this.nextSong = function() {
      var player = this.player();
      player.src = _.sample(this.songs);
      player.play();
  }
  this.player = function() {
    return(document.getElementById('player'));
  }
  this.songs = [
      "mp3/U2 - With Or Without You.mp3",
      "mp3/Imagine Dragons - Believer (Audio) copy.mp3",
      "mp3/James Arthur - Say You Won't Let Go.mp3"
      ];
}

myJukeBox = new JukeBox();

$("#play").click(function() {
  myJukeBox.play();
});

$("#pause").click(function() {
  myJukeBox.pause();
});

$("#nextSong").click(function() {
  myJukeBox.nextSong();
});
