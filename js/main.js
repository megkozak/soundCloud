function JukeBox() {
  this.play = function() {
    if (this.player().currentSrc == '')
      this.playSong(this.songs()[0]);
    else
      this.player().play();
  }
  this.pause = function() {
      this.player().pause();
  }
  this.shuffle = function() {
    this.playSong(_.sample(this.songs()));
  }
  this.player = function() {
    return(document.getElementById('player'));
  }
  this.songs = function() {
    var result = [];

    $('#songs option').each(function() {
      result.push(this.value);
    });

    return(result);
  }
  this.chooseSong = function(){
    // var player = this.player();
    // player.src = document.getElementById('songs').value;
    // player.play();

    this.playSong(document.getElementById('songs').value);

    // var songDB = $("#song")
    // console.log(songDB);
    // console.log(choice);
    // player.src = choice.target.value;
    // console.log(document.getElementById('songs').value);
  }
  this.playSong = function(src) {
    var player = this.player();
    player.src = src;
    player.play();
  }
}

myJukeBox = new JukeBox();

$("#play").click(function() {
  myJukeBox.play();
});

$("#pause").click(function() {
  myJukeBox.pause();
});

$("#shuffle").click(function() {
  myJukeBox.shuffle();
});

$("#songs").change(event, function() {
  myJukeBox.chooseSong();
});
