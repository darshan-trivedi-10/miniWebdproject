setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    // hour.style.transform = `rotate(${hrotation}deg)`;
    // minute.style.transform = `rotate(${mrotation}deg)`;
    // second.style.transform = `rotate(${srotation}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hrotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${mrotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${srotation}deg)`;

}, 1000);

// var audio = document.createElement('audio');
// audio.setAttribute('src', './Clock Using HTML, CSS & JS/clock.mp3');
// audio.loop = true;
// audio.play();
// audio.setAttribute('autoplay', true);
// var audio2 = new Audio('./Clock Using HTML, CSS & JS/clock.mp3');
// audio2.play();
var audio = document.createElement('audio');
audio.setAttribute('src', './clock.mp3');
audio.loop = true;
audio.play();



