import * as os from 'os';

const cpuInfo = async() => {
    let numOfCpus = `Amount of CPUS: ${os.cpus().length};` 
    let allCpusInfo = os.cpus().map((item, id) => {
        return `Core ${id+1} info:\n model: ${item.model.trim()};\n clock rate: ${(item.speed/1000).toFixed(1)}GHz; \n`
    })
    return `${numOfCpus}\n` + allCpusInfo.join('');
}

const customOs = async (param) => {

    switch (param) {
        case '--EOL':
            console.log(JSON.stringify(os.EOL));
            break;
        case '--cpus':
            console.log(await cpuInfo());
            break;
        case  '--homedir':
            console.log(os.homedir());
            break;
        case '--username':
            console.log(os.userInfo().username);
            break;
        case '--architecture':
            console.log(os.arch());
            break;          
        default:
            console.error('Invalid input');
            break;
    }
};

export { customOs };

