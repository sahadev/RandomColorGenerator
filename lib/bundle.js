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
     * 
     * @param {*} offset Hue起始偏移量 在0 ~ 360之间
     * @param {*} step 单次递增步长 在1 ~ 20之间
     * @param {*} options 可选，指定Saturation与Luminosity的值。使用示例: { s: 0~100, l: 0~100}
     * 
     * 参考: https://en.wikipedia.org/wiki/HSL_and_HSV
     */
    function generateLinearWithHSL(offset = 0, step = 1, options) {
        let _hueOffset = offset > 0 ? offset : 0;// 默认从0开始
        let _hueStep = step > 1 && step < 20 ? step : 1; // 默认单次递增1个单位

        let _saturation = options && options.s < 100 && options.s > 0 ? options.s : 100;
        let _luminosity = options && options.l < 100 && options.l > 0 ? options.l : 50;

        function hslToRgb(h, s, l) {

            h /= 360;
            s /= 100;
            l /= 100;

            var r, g, b;

            if (s == 0) {
                r = g = b = l; // achromatic
            } else {
                var hue2rgb = function hue2rgb(p, q, t) {
                    if (t < 0) t += 1;
                    if (t > 1) t -= 1;
                    if (t < 1 / 6) return p + (q - p) * 6 * t;
                    if (t < 1 / 2) return q;
                    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                };

                var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                var p = 2 * l - q;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }

            return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
        }

        function convertHex(math) {
            let preResult = math.toString(16);

            if (math < 16) {
                preResult = `0${preResult}`;
            }

            return preResult;
        }

        return (function* () {
            for (; _hueOffset < 360; _hueOffset += _hueStep, _hueOffset >= 360 && (_hueOffset = 0)) {
                const resultArray = hslToRgb(_hueOffset, _saturation, _luminosity);
                const preResult = `#${convertHex(resultArray[0])}${convertHex(resultArray[1])}${convertHex(resultArray[2])}`;
                yield preResult;
            }
        })()
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
                for (; true; startPoint += seek) {
                    if (startPoint === 0 || startPoint > 255) {
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
            let preResult = startPoint.toString(16);

            if (startPoint < 16) {
                preResult = `0${preResult}`;
            }
            return preResult;
        }

        return randomColor();
    }

    exports.generateColor = generateColor;
    exports.generateColorTemplate = generateColorTemplate;
    exports.generateLinearWithHSL = generateLinearWithHSL;

    return exports;

}({}));
