var rcg2 = (function (exports) {
    'use strict';

    // Random / Linear Color Generator

    // 分治算法计算所有的颜色模板值
    function generateColorTemplate(array) {

        // 出口
        if (array.length === 1)
            return array;

        const resultArray = [];
        for (let index = 0; index < array.length; index++) {
            const firstEle = array[index];

            const shadow = array.slice();
            shadow.splice(array.indexOf(firstEle), 1);
            const temp = generateColorTemplate(shadow);

            // 组合
            for (let indexJ = 0; indexJ < temp.length; indexJ++) {
                const secondEle = temp[indexJ];
                resultArray.push(`${firstEle}${secondEle}`);
            }
        }
        return resultArray;
    }

    /**
     * Generator Color
     * @param {*} increase 是否返回线性递增颜色
     * @param {*} increaseStep 颜色递增值，默认每次颜色递增1
     */
    function generateColor(increase = false, increaseStep = 1) {
        // 颜色起始值
        let startPoint = 0;

        // 模板基本组合元素
        const colorBaseEle = ['XX', 'FF', '00'];

        // colorTemplateArray存放实际计算颜色模板组合
        const colorTemplateArray = generateColorTemplate(colorBaseEle);

        console.info(colorTemplateArray.join(' '));

        // 单次返回一个模板组合
        function* getColorTemplate() {
            for (let index = 0; true; index++) {
                yield colorTemplateArray[index % colorTemplateArray.length];
            }
        }

        // 获取颜色模板指针
        const p = getColorTemplate();

        // 颜色增量
        let seek = increaseStep > 0 ? increaseStep : 1;

        // 返回一个随机或线性的颜色，例如:##FCBADE
        function* randomColor() {
            if (increase) {
                let template;
                for (let index = 0; true; index += seek) {
                    if (index === 0 || index > 255) {
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
                hexResult = `0${hexResult}`;
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

    exports.generateColor = generateColor;
    exports.generateColorTemplate = generateColorTemplate;

    return exports;

}({}));
