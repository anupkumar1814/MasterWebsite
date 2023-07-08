// console.log("welcome to spotify");

// initialise the variables
let songIndex = 0;
let audioElement = new Audio('audio/song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
myProgressBar.value = 0;
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {
        songName: "song1",
        filePath: "audio/song1.mp3",
        coverPath: 'images/cover1.jpg'
    },
    {
        songName: "song2",
        filePath: "audio/song2.mp3",
        coverPath: 'images/cover2.jpg'
    },
    {
        songName: "song3",
        filePath: "audio/song3.mp3",
        coverPath: 'images/cover3.jpg'
    },
    {
        songName: "song4",
        filePath: "audio/song4.mp3",
        coverPath: 'images/cover4.jpg'
    },
    {
        songName: "song5",
        filePath: "audio/song5.mp3",
        coverPath: 'images/cover5.jpg'
    },
    {
        songName: "song6",
        filePath: "audio/song6.mp3",
        coverPath: 'images/cover6.jpg'
    }
]

songItems.forEach((element, i) => {//call a function for each element in array
    //    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

//handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// listen to event

audioElement.addEventListener('timeupdate', () => {
    // update Seekbar

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        if (gif.style.opacity == 0) {
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            masterSongName.innerText = songs[songIndex].songName;
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `audio/song${songIndex + 1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-pause-circle');
        }
        else {
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            masterSongName.innerText = songs[songIndex].songName;
            e.target.classList.add('fa-circle-play');
            e.target.classList.remove('fa-pause-circle');
            audioElement.src = `audio/song${songIndex + 1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.pause();
            gif.style.opacity = 0;
            masterPlay.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-pause-circle');
        }

    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex == 8) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `audio/song${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    if (masterPlay.classList.contains('fa-pause-circle')) {
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        myProgressBar.value = 0;
    }

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex == 0) {
        songIndex = 8;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `audio/song${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    if (masterPlay.classList.contains('fa-pause-circle')) {
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        myProgressBar.value = 0;
    }
})