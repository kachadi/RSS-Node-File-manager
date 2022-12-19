const checkDoubleQuotes = (pathToFile) => {
    let checkedPath;
    if (pathToFile.join(' ').includes('"')) {
        checkedPath = pathToFile.join(' ').split('"').filter(i => i !=='' && i !== ' ');
    } else {
        checkedPath = pathToFile;
    }
    
    return checkedPath;
};

export { checkDoubleQuotes };