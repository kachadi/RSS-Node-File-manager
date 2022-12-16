import { homedir } from 'os';
import readlinePromises from 'node:readline/promises';
import { userGreeting, userFarewell, printDirectory } from './helpers/helpers_export.js';
import { handleCommands } from './handleCommands.js';

let userName = 'Guest';
const argv = process.argv.slice(2);

if (argv[0] && argv[0].split('').includes('=')) {
    userName = argv[0].split('=')[1];
}

process.chdir(homedir());
userGreeting(userName);
printDirectory();

const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl
    .on('line', line => handleCommands(rl,line))
    .on('SIGINT', () => {
        rl.close();
    })
    .on('close', () => {
        userFarewell(userName);
        process.nextTick(() => process.exit())
    })