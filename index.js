// Random Color Generator

// 颜色起始值
let startPoint = 0, seek = 0; // 颜色增量

let colorTemplateArray = []; // 存放组合后的模板

// 模板基本组合元素
const colorBaseEle = ['XX', 'FF', '00']

// 分治算法计算所有的颜色模板值
function generatorColorTemplate(array) {
    if (array.length === 1)
        return array;

    const resultArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        const shadow = array.slice();
        shadow.splice(array.indexOf(element), 1)
        const temp = generatorColorTemplate(shadow);

        for (let indexJ = 0; indexJ < temp.length; indexJ++) {
            const element2 = temp[indexJ];
            resultArray.push(`${element}${element2}`);
        }

    }
    return resultArray;
}

// 单次返回一个模板组合
function* getColorTemplate() {
    for (let index = 0; true; index++) {
        yield colorTemplateArray[index % colorTemplateArray.length];
    }
}

// colorTemplateArray存放实际计算颜色模板组合
colorTemplateArray = colorTemplateArray.concat(generatorColorTemplate(colorBaseEle));

// 获取颜色模板指针
const p = getColorTemplate();

// Generator Color
function generatorColor(increase = false, templateStep = 255) { // 模板变换步长，默认255次返回变换一次模板。
   
    seek = Math.round(255 / templateStep);

    // 返回一个随机的颜色，例如:##FCBADE
    function* randomColor() {
        if (increase) {
            let template;
            for (let index = 0; true; index++) {
                if (index % templateStep === 0) {
                    index = 0;
                    startPoint = 0;
                    template = p.next().value;
                }
                const tempColor = increaseHex(); // 单步自增变量, 类似于9C
                const result = "#" + template.replace(new RegExp('XX', 'g'), tempColor);
                yield result;
            }
        } else {
            while (true) {
                const result = `#${randomHex()}${randomHex()}${randomHex()}`;
                console.info(result);
                yield result;
            }
        }
    }

    // 生成一个随机的双位16进制值，由0~255之间的值生成，最后变为16进制
    function randomHex() {
        const base = Math.random();
        const integerBase = base * 255;
        const roundResult = Math.round(integerBase);
        let hexResult = roundResult.toString(16);

        if (parseInt(roundResult) < 16) {
            hexResult = `0${hexResult}`
        }

        return hexResult;
    }

    // 生成一个递增的16进制值
    function increaseHex() {
        if (startPoint > 255) {
            startPoint = 0;
        }

        let preResult = startPoint.toString(16);

        if (startPoint < 16) {
            preResult = `0${preResult}`;
        }

        startPoint += seek;
        return preResult;
    }

    return randomColor();
}

module.exports = {
    generatorColor,
    generatorColorTemplate,
    getColorTemplate,
}