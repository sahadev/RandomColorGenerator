const { generateColorTemplate, generateColor, generateLinearWithHSL } = require('./lib/index.js');

const pointer = generateLinearWithHSL(0, 4, { s: 100, l: 50 });

const resultArray = [];
for (let index = 0; index < 10; index++) {
    resultArray.push({ Color: pointer.next().value })
}

console.table(resultArray);

/**
 * 
┌─────────┬───────────┐
│ (index) │   Color   │
├─────────┼───────────┤
│    0    │ '#ff0000' │
│    1    │ '#ff1100' │
│    2    │ '#ff2200' │
│    3    │ '#ff3300' │
│    4    │ '#ff4400' │
│    5    │ '#ff5500' │
│    6    │ '#ff6600' │
│    7    │ '#ff7700' │
│    8    │ '#ff8800' │
│    9    │ '#ff9900' │
└─────────┴───────────┘
 */
