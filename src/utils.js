const userGreeting = (userName) => console.log(`Welcome to the File Manager, ${userName}!`);
const userFarewell = (userName) => console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
const printDirectory = () => console.log(`You are currently in ${process.cwd()}`);

export { userGreeting, userFarewell, printDirectory };