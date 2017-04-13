SC.initialize({   client_id: 'fd4e76fc67798bfa742089ed619084a6' });

// var tracks = [
//     '/tracks/238277971',
//     '/tracks/178747223',
//     '/tracks/201564439',
//     '/tracks/246726977'
//   ];

// var SoundCloud = {}
// SC.stream().then(function(player){
//   tracks.push(player);
//   console.log(tracks);
// });

// SC.get("/tracks", function(response) {
//   for (var i = 0; i < response.length; i++) {
//     $("ul").append("<li>" + response[i].title + "</li>");
//   }
// });

// for(var i=0;i <tracks.length; i++){
//   SC.get(tracks[i]).then(function(response) {
//     SoundCloud[response.id] = response;
//   });
// }
//
// for(var i=0;i <tracks.length; i++){
//   SC.stream(tracks[i]).then(function(response) {
//     console.log(response);
//     trackAudio.push(response);
//   });
// }

function JukeBox() {
  this.start = function() {
    this.play(0);
  };

  this.play = function(trackID) {
    var potato = this;
    SC.stream(this.songs()[trackID]).then(function(player) {
      potato.player = player;
      potato.player.play()
    });
  };
  this.pause = function() {
      this.player.pause();
  };

  this.shuffle = function() {
    var randomTrackID = Math.floor(Math.random() * this.songs().length);
    this.play(randomTrackID);

    // SC.stream(randomTrackID).then(function() {
    //   // random.player = player;
    //   // random.player.play()
    //   this.playSong(_.sample(this.songs()));
    // });
  };
    // this.playSong(_.sample(this.songs()));


  this.songs = function() {
    var result = [
        '/tracks/238277971',
        '/tracks/178747223',
        '/tracks/201564439',
        '/tracks/246726977'
      ];
    return(result);
    };
  };

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
  };

  // here
  this.playSong = function(src) {
    var player = this.player();
    player = trackID;
    player.play();
  };


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
