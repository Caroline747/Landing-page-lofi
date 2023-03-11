//MUSICA PLAYER
var audElem= document.getElementsByTagName('audio')[0].getAttribute('id');
$(".card").click(function(){
   song(Lofi);
   });
var Lofi = document.getElementById(audElem);
   function song(a){
   $(".teethBox").addClass("playing")
   $(".tape-ribbon").addClass("play")
   $(".tape-ribbon-two").addClass("play-two")

   a.play();
   }

// BOTÃO DARK
function toggle_light_mode() {
   var app = document.getElementsByTagName("BODY")[0];
   if (localStorage.lightMode == "dark") {
       localStorage.lightMode = "light";
       app.setAttribute("light-mode", "light");
   } else {
       localStorage.lightMode = "dark";
       app.setAttribute("light-mode", "dark");
   }
}

window.addEventListener(
   "storage",
   function () {
       if (localStorage.lightMode == "dark") {
           app.setAttribute("light-mode", "dark");
       } else {
           app.setAttribute("light-mode", "light");
       }
   },
   false
);

//PRELOADER
//<![CDATA[
    $(window).on('load', function () {
        $('#preloader .inner').fadeOut();
        $('#preloader').delay(100).fadeOut('slow'); 
        $('body').delay(100).css({'overflow': 'visible'});
    })
    //]]>