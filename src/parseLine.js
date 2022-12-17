import { ERR_MSG_INVALID_INPUT } from './constants.js';
import { customOs, customCd, customLs, customCat, customAdd, customRm, customHash } from './commands_functions/commands_export.js';

const parseLine = async (rl, line) => {
    
    let [command, ...args] = line.trim().split(' ');
    
    switch (command) {
        case '.exit':
            rl.close();
            break;
        case 'up':
            await customCd('..');
            break;
        case 'cd':
            await customCd(args);
            break;
        case 'ls':
            await customLs();
            break;
        case 'cat':
            await customCat(args);
            break;
        case 'add':
            await customAdd(args);
            break;
        case 'rn':
            
            break;
        case 'cp':
            
            break;
        case 'mv':
            
            break;
        case 'rm':
            await customRm(args);
            break;
        case 'os':
            await customOs(...args);
            break;
        case 'hash':
            await customHash(args);
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
    