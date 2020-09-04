const cover = document.querySelector(".cover")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const playBtn = document.querySelector(".play")
const pauseBtn = document.querySelector(".pause")
const stopBtn = document.querySelector(".stop")
let currentImgIndex = 0
const myAudio = new Audio()

const mediaArr = [
    { src: "dukedamont.jpg",
     audio: "dukedamont.mp3"},
    { src: "designed.jpg",
     audio: "designed.mp3"},
    { src: "agar.jpg",
     audio: "agar-agar.mp3"},
    { src: "joji.jpg",
     audio: "test-drive.mp3"},
    { src: "breath.jpg",
     audio: "breathing.mp3"}
]

/*Media goes to first index of mediaArr.
 Then takes the src to the new const called img
 does same thing for the audio
 adds this sources to the preloadArr which we
use for prevent loading delay*/

const preloadArr = []
for(let media of mediaArr){
    const img = new Image()
    img.src = media.src
    const sound = new Audio(media.audio)
    preloadArr.push([img,sound])
}

playBtn.addEventListener("click", handlePlay)
pauseBtn.addEventListener("click", handlePause)
stopBtn.addEventListener("click", handleStop)

prev.addEventListener("click", function(){handleClick(-1)})
next.addEventListener("click", function(){handleClick(1)})

/*In handleClick function, we have a step paramter which is gonna adjust
the cover. The currentImgIndex is 0 in the beginning. Above this comment
section, u can see the events for prev and next buttons. They have steps 
for reaching previous and next covers.*/

function handleClick(step){
    //current cover
    currentImgIndex += step
    if(currentImgIndex < 0){
        currentImgIndex = mediaArr.length - 1
    }
    if(currentImgIndex === mediaArr.length){
        currentImgIndex = 0
    }
    updateCurrentMedia()
}

function updateCurrentMedia(){
    cover.src = mediaArr[currentImgIndex].src
    myAudio.src = mediaArr[currentImgIndex].audio
}

updateCurrentMedia()

function handlePlay() {
    myAudio.play()
  }
  
function handlePause() {
    myAudio.pause()
  }
  
function handleStop() {
    myAudio.pause()
    //reset time
    myAudio.currentTime = 0
  }

