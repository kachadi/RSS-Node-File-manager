const availableCommands = ['up', 'cd', 'ls', 'cat', 'add',
 'rn', 'cp', 'mv', 'rm', 'os', 'hash', 'compress', 'decompress'];


export default function handleLine(eventEmitter, rl) {
    let [command, args] = rl.trim().split(' ');
    if (availableCommands.includes(command)) {
        eventEmitter.emit(command, args);
    } else {
        console.error('Invalid input');
    }
    
}   
