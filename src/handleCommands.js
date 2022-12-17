import { ERR_MSG_OPERATION_FAILED } from './constants.js';
import { printDirectory } from './helpers/printDirectory.js';
import { parseLine } from './parseLine.js';

const handleCommands = async (rl, line) => {

    await parseLine(rl, line)
        .catch(() => console.error(ERR_MSG_OPERATION_FAILED))

    await printDirectory();
}

export { handleCommands };