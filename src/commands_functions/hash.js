import fs from 'fs';
import * as crypto from 'crypto';
import { resolvePath } from '../helpers/resolvePath.js';

const customHash = async ([...pathToFile]) => {

    await fs.promises.readFile(resolvePath(pathToFile), null , { flag: 'wx+'})
        .then(data => console.log(crypto.createHash('sha256').update(data).digest('hex')));
    
}

export { customHash }