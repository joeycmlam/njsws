
const msg = 'my first nodejs in visual studio!';

const path = require('path');

console.log(`the file name is ${path.basename(__filename)}`);

console.log(msg);

console.log(__dirname);

console.log(__filename);

console.log(process.pid)

console.log(process.versions.node)


const [, , arg1, arg2] = process.argv;

const grab = flag => {
    let idx = process.argv.indexOf(flag) + 1;
    return process.argv[idx];
}

const sid = grab("--sid");

const domain = grab("--domain");

console.log(`arg: [${sid}] [${domain}]`)



