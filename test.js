const { generateColorTemplate, generateColor } = require('./lib/index.js');

const pointer = generateColor(true, 4);

const resultArray = [];
for (let index = 0; index < 1000; index++) {
    resultArray.push({ ID: `${index + 1}`, color: `${pointer.next().value}` });
}

console.table(resultArray);