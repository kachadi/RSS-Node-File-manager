import path from 'path';

const resolvePath = (pathToFile) => {
    let removeQuotesPath = pathToFile
        .join(' ')
        .split('"')
        .map(i => i.replace(`"`, ''))
        .join('')

    return path.resolve(removeQuotesPath);
};

export { resolvePath };