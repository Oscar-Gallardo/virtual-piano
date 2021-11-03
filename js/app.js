document.addEventListener('keypress', keyIsPressed);

//event function to check when a key is pressed and play audio if it is a piano key
function keyIsPressed(event) {

    let sound = document.createElement('audio');

    //different code cases for the piano keys
    switch(event.code) {
        case 'KeyA':
            sound.src = 'audio/A.mp3';
            sound.play();
            break;
        case 'KeyS':
            sound.src = 'audio/S.mp3';
            sound.play();
            break;
        case 'KeyD':
            sound.src = 'audio/D.mp3';
            sound.play();
            break;
        case 'KeyF':
            sound.src = 'audio/F.mp3';
            sound.play();
            break;
        case 'KeyG':
            sound.src = 'audio/G.mp3';
            sound.play();
            break;
        case 'KeyH':
            sound.src = 'audio/H.mp3';
            sound.play();
            break;
        case 'KeyJ':
            sound.src = 'audio/J.mp3';
            sound.play();
            break;
        case 'KeyW':
            sound.src = 'audio/W.mp3';
            sound.play();
            break;
        case 'KeyE':
            sound.src = 'audio/E.mp3';
            sound.play();
            break;
        case 'KeyT':
            sound.src = 'audio/T.mp3';
            sound.play();
            break;
        case 'KeyY':
            sound.src = 'audio/Y.mp3';
            sound.play();
            break;
        case 'KeyU':
            sound.src = 'audio/U.mp3';
            sound.play();
            break;
        default:
            console.error(`The '${event.key}' key is not an option.`);
            break;
    }
}