import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { checkDoubleQuotes } from '../helpers/checkDoubleQuotes.js';

const brotliCompress = async (source, target) => {
    return new Promise((resolve,reject) => {
        const brotli = zlib.createBrotliCompress();

        const readStream = fs.createReadStream(source);
        readStream.on('error', err => reject(err))
        const writeStream = fs.createWriteStream(target, { flags: 'wx'})
        writeStream.on('error', err => reject(err))
        writeStream.on('close', () => resolve())
        readStream
            .pipe(brotli)
            .pipe(writeStream);
    })
};

const customCompress = async ([...pathToFile]) => {

    let sourceAndTargetPath = checkDoubleQuotes(pathToFile);
    let sourcePath = path.resolve(sourceAndTargetPath[0].trim());
    let fileName = path.basename(sourcePath);
    let targetPath = path.resolve(sourceAndTargetPath[1].trim(), `${fileName}.br`);

    await fs.promises.access(sourcePath);
    await brotliCompress(sourcePath, targetPath);
}

export { customCompress };
