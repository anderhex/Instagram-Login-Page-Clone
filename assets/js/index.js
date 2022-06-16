/*
   Instagram Login Page Clone
   @Author: Anderson Daniel
   @Github: Anderhex
   @License: MIT
*/
const instaPhoneSlider = images => {

    let screen = document.getElementById('screen');
    let screenIndex = 0;
    setInterval(() => {
        screenIndex = screenIndex >= images.length - 1 ? 0 : screenIndex + 1;
        console.log('Index: ' + screenIndex, 'Image length:' + images.length);
        screen.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], { iterations: 1, duration: 1000 });
        screen.src = images[screenIndex];

    }, 5000);


}

instaPhoneSlider(
    [
        "assets/img/screen01.png",
        "assets/img/screen02.png",
        "assets/img/screen03.png",
        "assets/img/screen04.png",
        "assets/img/screen05.png"
    ]
)