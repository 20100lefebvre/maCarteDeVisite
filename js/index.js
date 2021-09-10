// Faire title html en JS
// const git = document.querySelector("#git");
// const mail = document.querySelector("#mail");
// const cv = document.querySelector("#cv");

// const gitText = document.querySelector("#gitText");
// const mailText = document.querySelector("#mailText");
// const cvText = document.querySelector("#cvText");

// git.addEventListener("mouseenter", () => {
 
//     gitText.innerText = 'git';

//     setTimeout(function() {
//         gitText.innerText = '';
//     }, 500);
   
// });

// mail.addEventListener("mouseenter", () => {
 
//     mailText.innerText = 'mail';

//     setTimeout(function() {
//         mailText.innerText = '';
//     }, 500);
   
// });

// cv.addEventListener("mouseover", () => {
 
//     cvText.innerText = 'cv';

//     setTimeout(function() {
//         cvText.innerText = '';
//     }, 500);
   
// });
// ---------------------------------------------------------------------
// test anim developpeur web js

let requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

let cancelAnimationFrame = window.cancelAnimationFrame ||
                           window.mozcancelAnimationFrame;



function start(){

    window.requestAnimationFrame(function(time){      
    document.querySelector("#container").className = "container changing";
    });
    
}
start();


