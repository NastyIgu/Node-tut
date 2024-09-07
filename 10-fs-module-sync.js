// Fs Module 

// one of the ways to import the fs module methods
//const fs = require('fs');
//fs.readFileSync();
//fs.writeFileSync();


const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(`${first}, ${second}`);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' }
    );