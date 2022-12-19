import fs from 'fs';
import path from 'path';
import { checkDoubleQuotes } from '../helpers/checkDoubleQuotes.js';

const customRn = async ([...pathToFile]) => {

    let filePathAndNewFileName = checkDoubleQuotes(pathToFile);
    let filePath = path.resolve(filePathAndNewFileName[0].trim());
    let fileName = path.basename(filePath);
    let newFilePath = path.resolve(filePath.replace(fileName, filePathAndNewFileName[1].trim()));

    return await fs.promises.rename(filePath, newFilePath)
}

export { customRn };