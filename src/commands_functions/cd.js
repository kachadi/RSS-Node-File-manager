import { resolvePath } from '../helpers/resolvePath.js';

const customCd = async ([...pathToFile]) => {

    process.chdir(resolvePath(pathToFile));
    
}

export { customCd };