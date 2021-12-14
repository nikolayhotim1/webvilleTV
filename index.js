'use strict';
let position = 0;
let playlist;
let video;

window.onload = function () {
    playlist = [
        'video/preroll',
        'video/areyoupopular',
        'video/destinationearth'
    ];

    video = document.getElementById('video');
    video.addEventListener('ended', nextVideo, false);
    playVideo(position);
};

function nextVideo() {
    position++;

    if (position === playlist.length) {
        position = 0;
    }

    playVideo(position);
}

function playVideo(position) {
    video.src = `${playlist[position]}${getFormatExtension()}`;

    video.onloadeddata = function () {
        console.log("Browser has loaded the current frame");
        console.log(`Playing ${video.currentSrc}`);
    };

    video.play();
}

function getFormatExtension() {
    if (video.canPlayType('video/webm') !== '') {
        return '.webm';
    } else if (video.canPlayType('video/mp4') !== '') {
        return '.mp4';
    } else if (video.canPlayType('video/ogg') !== '') {
        return '.ogv';
    } else {
        alert('Sorry, your browser doesn\'t support the video element');
    }
}