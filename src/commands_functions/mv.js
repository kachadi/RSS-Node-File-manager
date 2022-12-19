import fs from 'fs';
import path from 'path';
import { checkDoubleQuotes } from '../helpers/checkDoubleQuotes.js';
import { customCp } from './cp.js';

const customMv = async ([...pathToFile]) => {

    await customCp([...pathToFile]);

    let sourceAndTargetPath = checkDoubleQuotes(pathToFile);
    let sourcePath = path.resolve(sourceAndTargetPath[0].trim());
    await fs.promises.rm(sourcePath);
}

export { customMv };