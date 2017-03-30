$("#play").click(
    function() {
        // alert('imclicked!');
        // var audioElement = $('audio');
        // console.log(audioElement);
        document.getElementById('player').play();

    }
);
$("#pause").click(
    function() {
        // alert('imclicked!');
        // var audioElement = $('audio');
        // console.log(audioElement);
        document.getElementById('player').pause();
        var obj = document.createElement('audio');
        obj.controls = true;

    }
);
//
//
//     }
// );
// $(document).ready(function() {
//     var audioElement = document.createElement('audio');
//     audioElement.setAttribute('src', 'mp3/DpMfP6qUSBo.mp3');
// }
// );
