import fs from 'fs';
import path from 'path';
import { checkDoubleQuotes } from '../helpers/checkDoubleQuotes.js';

const copyFile = async (source, target) => {
    return new Promise((resolve,reject) => {
        const readStream = fs.createReadStream(source);
        readStream.on('error', err => reject(err))
        const writeStream = fs.createWriteStream(target, { flags: 'wx'})
        writeStream.on('error', err => reject(err))
        writeStream.on('close', () => resolve())
        readStream.pipe(writeStream);
    })
};

const customCp = async ([...pathToFile]) => {

    let sourceAndTargetPath = checkDoubleQuotes(pathToFile);
    let sourcePath = path.resolve(sourceAndTargetPath[0].trim());
    let fileName = path.basename(sourcePath);
    let targetPath = path.resolve(sourceAndTargetPath[1].trim(), fileName);

    await fs.promises.access(sourcePath)
    return await copyFile(sourcePath, targetPath)
}

export { customCp };

