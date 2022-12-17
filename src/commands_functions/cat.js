import fs from 'fs';
import { resolvePath } from '../helpers/resolvePath.js';

const customCat = async ([...pathToFile]) => {

    const readStream = fs.createReadStream(resolvePath(pathToFile), { encoding: 'utf-8' });

    for await (const chunk of readStream) {
        console.log(chunk);
    }
}

export { customCat };