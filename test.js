import { generatorColorTemplate, generatorColor, getColorTemplate } from './src/index';

const result = generatorColorTemplate(['A', 'B', 'C', 'D', 'E']);

console.info(result.join(' '), result.length);