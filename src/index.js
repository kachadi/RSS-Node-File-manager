import EventEmitter from 'events';
import { homedir } from 'os';
import * as readlinePromises from 'node:readline/promises';
import  customOs  from './os.js'
import  handleLine  from './handleLine.js';
import { userGreeting, userFarewell, printDirectory } from './utils.js';

let userName = 'Guest';
const argv = process.argv.slice(2);

if (argv[0] && argv[0].split('').includes('=')) {
    userName = argv[0].split('=')[1];
}

process.chdir(homedir());
userGreeting(userName);
printDirectory();

const eventEmitter = new EventEmitter();
const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout,
});

eventEmitter
    .on('os', customOs)
    // .on('.exit', )

rl
    .on('line', handleLine.bind(rl,eventEmitter))
    .on('SIGINT', () => {
        userFarewell(userName);
        rl.close();
    })