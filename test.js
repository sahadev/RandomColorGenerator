const { generatorColorTemplate } = require('./index');

const result = generatorColorTemplate(['A', 'B', 'C', 'D', 'E']);

console.info(result.join(' '), result.length);