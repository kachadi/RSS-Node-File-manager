import * as fs from 'fs';
import { ERR_MSG_OPERATION_FAILED } from '../constants.js';
import { sortFilesAndDirectories } from '../helpers/helpers_export.js'

const customLs = async () => {
        await fs.promises.readdir(process.cwd())
            .then(filenames => {
                const itemsArray = Promise.all(filenames.map(async(item) => {

                    return fs.promises.lstat(item)
                        .then(stats => {
                            if (stats.isFile()) {
                                return {
                                    Name: item,
                                    Type: 'file',
                                }
                            } else if(stats.isDirectory()) {
                                return {
                                    Name: item,
                                    Type: 'directory',
                                }
                            }
                        })
                        .catch(() => console.error(ERR_MSG_OPERATION_FAILED))
                }))
                
                return itemsArray;
               
            })
            .then(data => console.table(data.filter(i => i !== undefined).sort(sortFilesAndDirectories))) 
}

export { customLs };

