import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { checkDoubleQuotes } from '../helpers/checkDoubleQuotes.js';

const brotliDecompress = async (source, target) => {
    return new Promise((resolve,reject) => {
        const brotli = zlib.createBrotliDecompress();

        const readStream = fs.createReadStream(source);
        readStream.on('error', err => reject(err))
        const writeStream = fs.createWriteStream(target, { flags: 'wx'})
        writeStream.on('error', err => reject(err))
        writeStream.on('close', () => resolve())
        readStream
            .pipe(brotli)
            .on('error', err => reject(err))
            .pipe(writeStream)
    })
};

const customDecompress = async ([...pathToFile]) => {

    let sourceAndTargetPath = checkDoubleQuotes(pathToFile);
    let sourcePath = path.resolve(sourceAndTargetPath[0].trim());

    if (!sourcePath.includes('.br')) {
        throw Error;
    }

    let fileName = path.basename(sourcePath);
    let targetPath = path.resolve(sourceAndTargetPath[1].trim(), fileName.replace('.br', ''));

    await fs.promises.access(sourcePath);
    await brotliDecompress(sourcePath, targetPath);
}

export { customDecompress };