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
//
$("#nextSong").click(
  function() {
    document.getElementById('player').src = '/Users/megankozak/Documents/homework/soundCloud/mp3/Imagine Dragons - Believer (Audio) copy.mp3';
    document.getElementById('player').play();
    var songs = new Array("")
  }

);

//




//     }
// );
// $(document).ready(function() {
//     var audioElement = document.createElement('audio');
//     audioElement.setAttribute('src', 'mp3/DpMfP6qUSBo.mp3');
// }
// );
// function track (name,controls,src,volume,loop) {
//
//        var  audio = document.createElement('audio');
//
//      audio.name = name;
//      audio.controls = controls;
//      audio.src = src;
//      audio.volume = volume;
//      audio.loop = loop;
//
//     return audio;
//
// };
//
// var music = [
// track('AudioGood',true,'sounds/good.wav',0.5,false),
// track('AudioWrong',true,'sounds/wrong.wav',0.5,false),
// track('musicBackground',true,'sounds/background.ogg',0.5,true),
// track('AudioDrop',true,'sounds/drop.wav',0.5,false),
// track('AudioCard',true,'sounds/card.wav',0.5,false)
// ];
