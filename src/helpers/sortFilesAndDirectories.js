const sortFilesAndDirectories = (a,b) => {
    const typeA = a.Type.toLowerCase();
    const typeB = b.Type.toLowerCase();
    const nameA = a.Name.toLowerCase(); 
    const nameB = b.Name.toLowerCase(); 

    if (typeA < typeB) {
      return -1;
    }
    if (typeA > typeB) {
      return 1;
    }  
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
};

export { sortFilesAndDirectories };

