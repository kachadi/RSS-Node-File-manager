import fs from 'fs';
import { resolvePath } from '../helpers/resolvePath.js';

const customRm = async ([...pathToFile]) => {

    await fs.promises.rm(resolvePath(pathToFile));
    
}

export { customRm }