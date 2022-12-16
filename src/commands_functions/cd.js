import path from 'path';
import { ERR_MSG_OPERATION_FAILED } from '../constants.js';
import { printDirectory } from '../helpers/printDirectory.js'

const customCd = async (targetPath) => {
    try {
        process.chdir(path.resolve(targetPath));
    } catch {
        console.error(ERR_MSG_OPERATION_FAILED);
    }

    printDirectory();
}

export { customCd };