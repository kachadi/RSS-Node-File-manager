import path from 'path';
import { ERR_MSG_INVALID_INPUT } from './constants.js';
import { customOs, customLs } from './commands_functions/commands_export.js';

const parseLine = async (rl, line) => {
    let [command, ...args] = line.trim().split(' ');
    
    switch (command) {
        case '.exit':
            rl.close();
            break;
        case 'up':
            process.chdir('..');
            break;
        case 'cd':
            process.chdir(path.resolve(args[0]));
            break;
        case 'ls':
            await customLs();
            break;
        case 'cat':
            
            break;
        case 'add':
            
            break;
        case 'rn':
            
            break;
        case 'cp':
            
            break;
        case 'mv':
            
            break;
        case 'rm':
            
            break;
        case 'os':
            await customOs(...args);
            break;
        case 'hash':
            
            break;
        case 'compress':
            
            break;
        case 'decompress':
            
            break;                                                                                                                                             
        default:
            console.error(ERR_MSG_INVALID_INPUT);
            break;
    }
}

export { parseLine };
    