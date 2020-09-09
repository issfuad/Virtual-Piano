let keys = ["KeyA", "KeyS", "KeyD","KeyF","KeyG","KeyH","KeyJ"]


document.addEventListener("keydown",function (piano){
    if (keys.includes(piano.code)){
        let pianoAudio = new Audio("white_keys/" + piano.code.replace("Key","")+".mp3");
        pianoAudio.play();
        console.log("The '"+piano.code.replace("Key", "")+ "' key is pressed");
    }
    else console.log("The '"+ piano.code.replace("key", "")+ "'key is not on the piano");
})
let bkeys = ["KeyW","KeyE","KeyT","KeyU","KeyY"]

document.addEventListener("keydown",function (piano) {
    if (bkeys.includes(piano.code)) {
        let pianoAudio = new Audio("black_keys/" + piano.code.replace("Key", "") + ".mp3");
        pianoAudio.play();
        console.log("The '" + piano.code.replace("Key", "") + "' key is pressed");
    } else console.log("The '" + piano.code.replace("key", "") + "'key is not on the piano");
})


