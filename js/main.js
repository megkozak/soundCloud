$( document ).ready(function(){
  $('#pause').prop('disabled', true);
})

SC.initialize({   client_id: 'fd4e76fc67798bfa742089ed619084a6' });

function JukeBox() {
  this.start = function() {
    this.play(0);
  };

  this.play = function(trackID) {

    $('#pause').prop('disabled', false);
    var track = this;
    SC.stream(this.songs()[trackID]).then(function(player) {
      track.player = player;
      track.player.play()
      // console.log(track);
      // console.log(player);

      SC.get("/tracks/238277971").then(function(response) {
        document.getElementsByTagName("body")[0].style.background = `lightblue url(${response.artwork_url}) no-repeat center fixed`;
        document.getElementById("genre").innerText = response.genre;
        console.log(response.id);
        console.log(response.kind);
        console.log(response.genre);
        console.log(response.artwork_url);
        console.log(response.uri);
      });

    });
  };


  this.pause = function() {
      this.player.pause();
  };

  this.shuffle = function() {
    var randomTrackID = Math.floor(Math.random() * this.songs().length);
    this.play(randomTrackID);

  };

  this.songs = function() {
    var result = [
        '/tracks/238277971',
        '/tracks/178747223',
        '/tracks/201564439',
        '/tracks/246726977'
      ];
    // console.log(result);
    return(result);

    };
  };

  // this.chooseSong = function(){
  //   var player = this.player();
  //   player.src = document.getElementById('songs').value;
  //   player.play();
  // };




myJukeBox = new JukeBox();

$("#play").click(function() {
  myJukeBox.start();
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
