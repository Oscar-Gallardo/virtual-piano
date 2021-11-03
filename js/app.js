document.addEventListener('keypress', keyIsPressed);

function keyIsPressed(event) {
    switch(event.code) {
        case 'KeyA':
            console.log(`The '${event.key}' key was pressed.`);
            break;
        case 'KeyS':
            console.log(`The '${event.key}' key was pressed.`);
            break;
        case 'KeyD':
            console.log(`The '${event.key}' key was pressed.`);
            break;
        case 'KeyF':
            console.log(`The '${event.key}' key was pressed.`);
            break;
        case 'KeyG':
            console.log(`The '${event.key}' key was pressed.`);
            break;
        case 'KeyH':
            console.log(`The '${event.key}' key was pressed.`);
            break;
        case 'KeyJ':
            console.log(`The '${event.key}' key was pressed.`);
            break;
        default:
            console.error(`The '${event.key}' key is not an option.`);
            break;
    }
}