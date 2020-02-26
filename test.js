const { generateColorTemplate, generateColor } = require('./lib/index.js');

const pointer = generateColor(true, 1);

const resultArray = [];
for (let index = 0; index < 10000; index++) {
    resultArray.push({ ID: `${index + 1}`, color: `${pointer.next().value}` });
}

console.table(resultArray);