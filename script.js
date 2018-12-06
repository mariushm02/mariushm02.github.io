document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = ['Are you searching for a', 'Web Developer?' ,"Interactive Design?", "Software Developer?", 'You are in the right place!'];
    var colors = ['#ffffff'];
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1

            document.querySelector("span").innerHTML =   text.substring(0, i+1) +'<span aria-hidden="true"></span>'
            // wait for a while and call this function again for next character
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback);
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
                StartTextAnimation(0);
            }, 5000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function(){
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
        document.querySelector("span").style.color = colors[i];
    }
    // start the text animation
    StartTextAnimation(0);
});

document.querySelector('.content .img').addEventListener('click', ()=>{
    document.getElementById('about').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});


document.querySelector('.contact').addEventListener('click', ()=>{
    document.getElementById('contact').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});


document.querySelector('.proiecte').addEventListener('click', ()=>{
    document.getElementById('portfolio').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});


document.querySelector('.despre').addEventListener('click', ()=>{
    document.getElementById('about').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

document.querySelector('.contactB').addEventListener('click', ()=>{
    document.getElementById('contact').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

//
// window.onscroll = function() {myFunction()};
// var header = document.getElementById("header");
// var sticky = header.offsetTop;
//
// function myFunction() {
//     if (window.pageYOffset > sticky){
//         console.log('rara');
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// }

function toggleMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

var figures = document.getElementsByClassName('figImg');
var figDescs = document.getElementsByClassName('figDesc');
for(var i = 0; i < figures.length; i++){
    for(var y = 0; y < figDescs.length; i++){
        figures[i].addEventListener('mouseenter', (e) => {
            event.target.querySelector('.figDesc').style.display = 'block';
            event.target.querySelector('.figDesc').classList.add('lala');
        });

        figures[i].addEventListener('mouseleave', (e) => {
            event.target.querySelector('.figDesc').style.display = 'none';
        });
    }
}
