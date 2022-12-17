import fs from 'fs';
import path from 'path';

const customAdd = async ([...fileName]) => {

    const filePath = path.resolve(`${process.cwd()}/${fileName.join(' ')}`);

    await fs.promises.writeFile(filePath, '', { flag: 'wx+'});
}

export { customAdd }