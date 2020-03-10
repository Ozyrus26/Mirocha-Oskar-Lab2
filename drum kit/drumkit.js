document.body.addEventListener('keypress', onKeyPress)
document.querySelector('#channel1Rec').addEventListener('click', btnChannel1Click)
document.querySelector('#channel2Rec').addEventListener('click', btnChannel2Click)
document.querySelector('#channel3Rec').addEventListener('click', btnChannel3Click)
document.querySelector('#channel4Rec').addEventListener('click', btnChannel4Click)
document.querySelector('#channel1play').addEventListener('click', playChannels)

let channel1Start
let channel2Start
let channel3Start
let channel4Start

const channel1 = []
const channel2 = []
const channel3 = []
const channel4 = []

const sounds = {
    Numpad7: '#boom',
    Numpad8: '#clap',
    Numpad9: '#hihat',
    Numpad4: '#kick',
    Numpad5: '#openhat',
    Numpad6: '#ride',
    Numpad1: '#snare',
    Numpad2: '#tink',
    Numpad3: '#tom',
}

function playChannels(){
    playChannel1()
    playChannel2()
    playChannel3()
    playChannel4()
}

function playChannel1() {
    channel1.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}

function playChannel2() {
    channel2.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}

function playChannel3() {
    channel3.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}

function playChannel4() {
    channel4.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}


function onKeyPress(e) {
    playSound(sounds[e.code]);
    const time = Date.now() - channel1Start;
    const sound = {
        sound: e.code,
        time: time
    }
    channel1.push(sound)
}

function onKeyPress(e) {
    playSound(sounds[e.code]);
    const time = Date.now() - channel2Start;
    const sound = {
        sound: e.code,
        time: time
    }
    channel2.push(sound)
}

function onKeyPress(e) {
    playSound(sounds[e.code]);
    const time = Date.now() - channel3Start;
    const sound = {
        sound: e.code,
        time: time
    }
    channel3.push(sound)
}

function onKeyPress(e) {
    playSound(sounds[e.code]);
    const time = Date.now() - channel4Start;
    const sound = {
        sound: e.code,
        time: time
    }  
    channel4.push(sound)
}

function playSound(id) {
   const audioTag = document.querySelector(id)
    audioTag.currentTime = 0
    audioTag.play()   
}

function btnChannel1Click() { channel1Start = Date.now() }
function btnChannel2Click() { channel2Start = Date.now() }
function btnChannel3Click() { channel3Start = Date.now() }
function btnChannel4Click() { channel4Start = Date.now() }

