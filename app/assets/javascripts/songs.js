// $(document).ready(function(){
//       $("#jquery_jplayer_1").jPlayer({
//         ready: function () {
//           $(this).jPlayer("setMedia", {
//             m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
//             oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
//           });
//         },
//         swfPath: "/js/jplayer",
//         supplied: "m4a, oga"
//       });
//     });

$(document).ready(function(){
  $("#jquery_jplayer_1").jPlayer({
      swfPath: "/js/jplayer",
      supplied: "mp3"
    });
  $('a.play').click(function(e) {
      e.preventDefault();
      var title = $(this).attr('alt'); 
      $('#songtitle').html(title); 
      $("#jquery_jplayer_1")
          .jPlayer("setMedia", {mp3: this.href })
          .jPlayer("play");
        });
});
//   $(document).ready(function() {  
//     // alert('hi');
//     var audioSection = $('section#audio');  
//     $('a.song').click(function() {  
  
//         var audio = $('<audio>', {  
//              controls : 'controls',
//              autoplay : 'autoplay'  
//         });  
  
//         var url = $(this).attr('href');  
//         var title = $(this).attr('alt');  
//         $('<source>').attr('src', url).appendTo(audio);  
//         audioSection.html(audio);  
//         $('#song_title').html(title);  
//         return false;  
//     });  
// });  