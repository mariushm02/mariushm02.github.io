$(document).ready(function() {
    //DECLARATIONS
    var myAudio = document.getElementById("myAudio");
    $('#myAudio').attr('src','audio.mp3');
    var isPlaying = false;
    function togglePlay() {
        if (isPlaying) {
            myAudio.pause();
            $(".volume").attr("src","volume-off-indicator.svg");
        } else {
            myAudio.play();
            $(".volume").attr("src","volume-up-solid.svg");
        }
    };

    myAudio.onplaying = function() {
        isPlaying = true;
    };
    myAudio.onpause = function() {
        isPlaying = false;
    };
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let countDownDate = new Date("Dec 31, 2018 12:00:00").getTime();
    let daysDiv = document.getElementById('days');
    let hoursDiv = document.getElementById('hours');
    let minutesDiv = document.getElementById('minutes');
    let secondsDiv = document.getElementById('seconds');
    let isMobile = false; //initiate as false
    $('#canvas').css("display", "none");
    $('#canvas-countdown').css('display', 'block');
    let x = setInterval(function () {

        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysDiv.innerHTML = days + "<div class='abs'><span>days</span></div> <div class='wrap-flame daysFlame'><div class='flame-wrapper'><div class='flame red'></div><div class='flame orange'></div><div class='flame gold'></div><div class='flame white'></div></div></div>";
        hoursDiv.innerHTML = hours + "<div class='abs'><span>hours</span></div></div> <div class='wrap-flame hoursFlame'><div class='flame-wrapper'><div class='flame red'></div><div class='flame orange'></div><div class='flame gold'></div><div class='flame white'></div></div></div>";
        minutesDiv.innerHTML = minutes + "<div class='abs'><span>minutes</span></div> <div class='wrap-flame minutesFlame'><div class='flame-wrapper'><div class='flame red'></div><div class='flame orange'></div><div class='flame gold'></div><div class='flame white'></div></div></div>";
        secondsDiv.innerHTML = seconds + "<div class='abs'><span>seconds</span></div> <div class='wrap-flame secondsFlame'><div class='flame-wrapper'><div class='flame red'></div><div class='flame orange'></div><div class='flame gold'></div><div class='flame white'></div></div></div>";


        if (distance <= 0) {
            clearInterval(x);
            daysDiv.innerHTML = 0 + "<div class='abs'><span>days</span></div> <div class='wrap-flame daysFlame'><div class='flame-wrapper'><div class='flame red'></div><div class='flame orange'></div><div class='flame gold'></div><div class='flame white'></div></div></div>";
            hoursDiv.innerHTML = 0 + "<div class='abs'><span>hours</span></div></div> <div class='wrap-flame hoursFlame'><div class='flame-wrapper'><div class='flame red'></div><div class='flame orange'></div><div class='flame gold'></div><div class='flame white'></div></div></div>";
            minutesDiv.innerHTML = 0 + "<div class='abs'><span>minutes</span></div> <div class='wrap-flame minutesFlame'><div class='flame-wrapper'><div class='flame red'></div><div class='flame orange'></div><div class='flame gold'></div><div class='flame white'></div></div></div>";
            secondsDiv.innerHTML = 0 + "<div class='abs'><span>seconds</span></div> <div class='wrap-flame secondsFlame'><div class='flame-wrapper'><div class='flame red'></div><div class='flame orange'></div><div class='flame gold'></div><div class='flame white'></div></div></div>";
            daysDiv.classList.add('countdown-finalDays');
            hoursDiv.classList.add('countdown-finalHours');
            minutesDiv.classList.add('countdown-finalMinutes');
            secondsDiv.classList.add('countdown-finalSeconds');
            setTimeout(function () {
                $('#canvas-countdown').css('display', 'none');
                $('#canvas').css('display', 'flex');
            }, 1000)

// device detection

        }
    }, 1000);

    for (i = 0; i < 75; i++){
        $(".stars-wrapper").append("<div class='stars s" + i + "'></div>");
}

    var i = false;
    document.querySelector('.volume').addEventListener('click', function(){
      togglePlay();
    });
});
