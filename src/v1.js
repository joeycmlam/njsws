
const msg = 'my first nodejs in visual studio!';

const path = require('path');

console.log(`the file name is ${path.basename(__filename)}`);

console.log(msg);

console.log(__dirname);

console.log(__filename);