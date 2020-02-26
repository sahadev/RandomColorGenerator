# 随机/线性颜色生成器 RandomColorGenerator

> NPM中已有一个同名的random-color-generator，简单看了下代码，原理很类似。因为命名冲突，于是我的名称为random-color-generator2。

本示例中使用了大量的Generator，在写的过程发现ES6所提供的Generator在这个场景中非常适用。可以参考学习。

## 随机示例
<style>
    .block {
        display: inline-block;
        width: 25px;
        height: 25px;
        text-align: center;
        color: white;
        line-height: 25px;
        font-size: 10px;
    }
</style>

<div id="container">
    <div class="block" style="background-color: #c2ae6a">1</div><div class="block" style="background-color: #4bab7d">2</div><div class="block" style="background-color: #5a4454">3</div><div class="block" style="background-color: #346438">4</div><div class="block" style="background-color: #e6080f">5</div><div class="block" style="background-color: #cd3b69">6</div><div class="block" style="background-color: #22f79b">7</div><div class="block" style="background-color: #8cb8e8">8</div><div class="block" style="background-color: #929ad1">9</div><div class="block" style="background-color: #a1e6d8">10</div><div class="block" style="background-color: #438d55">11</div><div class="block" style="background-color: #2bb8d2">12</div><div class="block" style="background-color: #cc5d82">13</div><div class="block" style="background-color: #151316">14</div><div class="block" style="background-color: #77aa2d">15</div><div class="block" style="background-color: #961a30">16</div><div class="block" style="background-color: #14f518">17</div><div class="block" style="background-color: #1f44f6">18</div><div class="block" style="background-color: #ac3b06">19</div><div class="block" style="background-color: #b27a72">20</div><div class="block" style="background-color: #eaefcb">21</div><div class="block" style="background-color: #c8ca02">22</div><div class="block" style="background-color: #7b5cdf">23</div><div class="block" style="background-color: #ce6fa9">24</div><div class="block" style="background-color: #2b3266">25</div><div class="block" style="background-color: #60fa28">26</div><div class="block" style="background-color: #e4e66d">27</div><div class="block" style="background-color: #875653">28</div><div class="block" style="background-color: #ef30f6">29</div><div class="block" style="background-color: #c41fb9">30</div><div class="block" style="background-color: #420659">31</div><div class="block" style="background-color: #78d0a1">32</div><div class="block" style="background-color: #11a14f">33</div><div class="block" style="background-color: #7fc11d">34</div><div class="block" style="background-color: #adfbf8">35</div><div class="block" style="background-color: #b5ee1b">36</div><div class="block" style="background-color: #94b17e">37</div><div class="block" style="background-color: #ea11ba">38</div><div class="block" style="background-color: #d7a4b5">39</div><div class="block" style="background-color: #cca638">40</div><div class="block" style="background-color: #df8866">41</div><div class="block" style="background-color: #7dadb2">42</div><div class="block" style="background-color: #064b63">43</div><div class="block" style="background-color: #6ff390">44</div><div class="block" style="background-color: #2fb89b">45</div><div class="block" style="background-color: #b49716">46</div><div class="block" style="background-color: #cff54a">47</div><div class="block" style="background-color: #2e2e86">48</div><div class="block" style="background-color: #a434df">49</div><div class="block" style="background-color: #c8ad26">50</div><div class="block" style="background-color: #38fa6d">51</div><div class="block" style="background-color: #d74e5b">52</div><div class="block" style="background-color: #7eff8a">53</div><div class="block" style="background-color: #31f32c">54</div><div class="block" style="background-color: #73bddd">55</div><div class="block" style="background-color: #eff3e2">56</div><div class="block" style="background-color: #7d0848">57</div><div class="block" style="background-color: #d9947a">58</div><div class="block" style="background-color: #d31b9c">59</div><div class="block" style="background-color: #8419f1">60</div><div class="block" style="background-color: #0ce3f6">61</div><div class="block" style="background-color: #5d223a">62</div><div class="block" style="background-color: #a1a330">63</div><div class="block" style="background-color: #94e4cf">64</div><div class="block" style="background-color: #4cc7a6">65</div><div class="block" style="background-color: #a0d36d">66</div><div class="block" style="background-color: #bf730d">67</div><div class="block" style="background-color: #91764d">68</div><div class="block" style="background-color: #ebdc34">69</div><div class="block" style="background-color: #802bec">70</div><div class="block" style="background-color: #0f0b61">71</div><div class="block" style="background-color: #a9783a">72</div><div class="block" style="background-color: #e33322">73</div><div class="block" style="background-color: #1cf92b">74</div><div class="block" style="background-color: #6c9616">75</div><div class="block" style="background-color: #7da14f">76</div><div class="block" style="background-color: #c5c279">77</div><div class="block" style="background-color: #d55b22">78</div><div class="block" style="background-color: #7d4b7c">79</div><div class="block" style="background-color: #7806e6">80</div><div class="block" style="background-color: #1d66e8">81</div><div class="block" style="background-color: #68642f">82</div><div class="block" style="background-color: #05379f">83</div><div class="block" style="background-color: #cf6531">84</div><div class="block" style="background-color: #3811cb">85</div><div class="block" style="background-color: #987c58">86</div><div class="block" style="background-color: #80d62c">87</div><div class="block" style="background-color: #5b7b11">88</div><div class="block" style="background-color: #3599cd">89</div><div class="block" style="background-color: #6ef1cb">90</div><div class="block" style="background-color: #576bf4">91</div><div class="block" style="background-color: #f9ac50">92</div><div class="block" style="background-color: #4842eb">93</div><div class="block" style="background-color: #a4de6f">94</div><div class="block" style="background-color: #f3a82f">95</div><div class="block" style="background-color: #773658">96</div><div class="block" style="background-color: #de3058">97</div><div class="block" style="background-color: #0abc2d">98</div><div class="block" style="background-color: #17c357">99</div><div class="block" style="background-color: #36d001">100</div>
</div>

## 线性示例
<div id="container">
<div class="block" style="background-color: #00FF00">1</div><div class="block" style="background-color: #0fFF00">2</div><div class="block" style="background-color: #1eFF00">3</div><div class="block" style="background-color: #2dFF00">4</div><div class="block" style="background-color: #3cFF00">5</div><div class="block" style="background-color: #4bFF00">6</div><div class="block" style="background-color: #5aFF00">7</div><div class="block" style="background-color: #69FF00">8</div><div class="block" style="background-color: #78FF00">9</div><div class="block" style="background-color: #87FF00">10</div><div class="block" style="background-color: #96FF00">11</div><div class="block" style="background-color: #a5FF00">12</div><div class="block" style="background-color: #b4FF00">13</div><div class="block" style="background-color: #c3FF00">14</div><div class="block" style="background-color: #d2FF00">15</div><div class="block" style="background-color: #e1FF00">16</div><div class="block" style="background-color: #f0FF00">17</div><div class="block" style="background-color: #0000FF">18</div><div class="block" style="background-color: #0f00FF">19</div><div class="block" style="background-color: #1e00FF">20</div><div class="block" style="background-color: #2d00FF">21</div><div class="block" style="background-color: #3c00FF">22</div><div class="block" style="background-color: #4b00FF">23</div><div class="block" style="background-color: #5a00FF">24</div><div class="block" style="background-color: #6900FF">25</div><div class="block" style="background-color: #7800FF">26</div><div class="block" style="background-color: #8700FF">27</div><div class="block" style="background-color: #9600FF">28</div><div class="block" style="background-color: #a500FF">29</div><div class="block" style="background-color: #b400FF">30</div><div class="block" style="background-color: #c300FF">31</div><div class="block" style="background-color: #d200FF">32</div><div class="block" style="background-color: #e100FF">33</div><div class="block" style="background-color: #f000FF">34</div><div class="block" style="background-color: #FF0000">35</div><div class="block" style="background-color: #FF0f00">36</div><div class="block" style="background-color: #FF1e00">37</div><div class="block" style="background-color: #FF2d00">38</div><div class="block" style="background-color: #FF3c00">39</div><div class="block" style="background-color: #FF4b00">40</div><div class="block" style="background-color: #FF5a00">41</div><div class="block" style="background-color: #FF6900">42</div><div class="block" style="background-color: #FF7800">43</div><div class="block" style="background-color: #FF8700">44</div><div class="block" style="background-color: #FF9600">45</div><div class="block" style="background-color: #FFa500">46</div><div class="block" style="background-color: #FFb400">47</div><div class="block" style="background-color: #FFc300">48</div><div class="block" style="background-color: #FFd200">49</div><div class="block" style="background-color: #FFe100">50</div><div class="block" style="background-color: #FFf000">51</div><div class="block" style="background-color: #FF0000">52</div><div class="block" style="background-color: #FF000f">53</div><div class="block" style="background-color: #FF001e">54</div><div class="block" style="background-color: #FF002d">55</div><div class="block" style="background-color: #FF003c">56</div><div class="block" style="background-color: #FF004b">57</div><div class="block" style="background-color: #FF005a">58</div><div class="block" style="background-color: #FF0069">59</div><div class="block" style="background-color: #FF0078">60</div><div class="block" style="background-color: #FF0087">61</div><div class="block" style="background-color: #FF0096">62</div><div class="block" style="background-color: #FF00a5">63</div><div class="block" style="background-color: #FF00b4">64</div><div class="block" style="background-color: #FF00c3">65</div><div class="block" style="background-color: #FF00d2">66</div><div class="block" style="background-color: #FF00e1">67</div><div class="block" style="background-color: #FF00f0">68</div><div class="block" style="background-color: #0000FF">69</div><div class="block" style="background-color: #000fFF">70</div><div class="block" style="background-color: #001eFF">71</div><div class="block" style="background-color: #002dFF">72</div><div class="block" style="background-color: #003cFF">73</div><div class="block" style="background-color: #004bFF">74</div><div class="block" style="background-color: #005aFF">75</div><div class="block" style="background-color: #0069FF">76</div><div class="block" style="background-color: #0078FF">77</div><div class="block" style="background-color: #0087FF">78</div><div class="block" style="background-color: #0096FF">79</div><div class="block" style="background-color: #00a5FF">80</div><div class="block" style="background-color: #00b4FF">81</div><div class="block" style="background-color: #00c3FF">82</div><div class="block" style="background-color: #00d2FF">83</div><div class="block" style="background-color: #00e1FF">84</div><div class="block" style="background-color: #00f0FF">85</div><div class="block" style="background-color: #00FF00">86</div><div class="block" style="background-color: #00FF0f">87</div><div class="block" style="background-color: #00FF1e">88</div><div class="block" style="background-color: #00FF2d">89</div><div class="block" style="background-color: #00FF3c">90</div><div class="block" style="background-color: #00FF4b">91</div><div class="block" style="background-color: #00FF5a">92</div><div class="block" style="background-color: #00FF69">93</div><div class="block" style="background-color: #00FF78">94</div><div class="block" style="background-color: #00FF87">95</div><div class="block" style="background-color: #00FF96">96</div><div class="block" style="background-color: #00FFa5">97</div><div class="block" style="background-color: #00FFb4">98</div><div class="block" style="background-color: #00FFc3">99</div><div class="block" style="background-color: #00FFd2">100</div>
</div>

## How to use
```
    npm install random-color-generator2
```
### For random color
```javascript
    const { generateColor } = require('random-color-generator2');

    const colorPointer = generateColor(false);

    // generate a random color, 调用无次数限制
    const color = colorPointer.next().value;
```

### For linear color
```javascript
    const { generateColor } = require('random-color-generator2');

    // 注意参数
    const colorPointer = generateColor(true, 2);

    // generate a linear color
    const color = colorPointer.next().value;
```

 > 可以无限调动，没有限制。

### For Chrome Runtime

对浏览器环境专门生成了对应文件，路径为: ```/lib/bundle.js```。如下为使用参考示例：
```html
    <script src="/lib/bundle.js"></script>
```

浏览器环境的方法是挂在到rcg2对象下的，所以需要通过rcg2调用：

```
    // 生成线性色, 步长为5
    const pointer = rcg2.generateColor(true, 5);
    const color = pointer.next().value;
```

 > 如有疑问，可以参见项目中的```index.html```示例文件。

## 对generateColor方法及颜色模板的说明
generateColor方法有两个参数.

 - 参数1，类型为boolean值，表示是否开启线性输出。
 - 参数2，类型为整型，表示线性输出情况下颜色的增量区间。例如这个值传入3，在第一个值为#00FF00的情况下，第二个值就为03FF00，以此类推。

颜色模板的排列组合为: XXFF00 XX00FF FFXX00 FF00XX 00XXFF 00FFXX，目前从这6个中循环取模板，后期将支持自定义模板。

## 分治算法求排列组合

在实现线性递增的过程中，需要了解情况线性颜色的变化方式，在观察了[ADOBE](https://color.adobe.com/create)对于颜色的变化方式之后，知道需要有一个模板的排列组合。虽然这里需要的只有6种，不用多长时间就可以穷举出来，但是我还是想通过分治的方法将所有的可能列出来。

实现代码如下：
```javascript
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
```

测试方式如下：
```javascript
// test.js
const { generateColorTemplate } = require('./src/index.js');

const result = generateColorTemplate(['A', 'B', 'C', 'D', 'E']);

console.info(result.join(' '), result.length);
```

对于5个元素的排列组合为: 5的阶层, 也就是 5 x 4 x 3 x 2 x 1 = 120.
最终的结果经过多轮测试是正确的:
```
ABCDE ABCED ABDCE ABDEC ABECD ABEDC ACBDE ACBED ACDBE ACDEB ACEBD ACEDB ADB
CE ADBEC ADCBE ADCEB ADEBC ADECB AEBCD AEBDC AECBD AECDB AEDBC AEDCB BACDE 
BACED BADCE BADEC BAECD BAEDC BCADE BCAED BCDAE BCDEA BCEAD BCEDA BDACE BDA
EC BDCAE BDCEA BDEAC BDECA BEACD BEADC BECAD BECDA BEDAC BEDCA CABDE CABED 
CADBE CADEB CAEBD CAEDB CBADE CBAED CBDAE CBDEA CBEAD CBEDA CDABE CDAEB CDB
AE CDBEA CDEAB CDEBA CEABD CEADB CEBAD CEBDA CEDAB CEDBA DABCE DABEC DACBE 
DACEB DAEBC DAECB DBACE DBAEC DBCAE DBCEA DBEAC DBECA DCABE DCAEB DCBAE DCB
EA DCEAB DCEBA DEABC DEACB DEBAC DEBCA DECAB DECBA EABCD EABDC EACBD EACDB 
EADBC EADCB EBACD EBADC EBCAD EBCDA EBDAC EBDCA ECABD ECADB ECBAD ECBDA ECD
AB ECDBA EDABC EDACB EDBAC EDBCA EDCAB EDCBA 120
```

对于这种场景使用分治算法求排列组合非常合适。

----
代码已经上传Github，地址为：[Random Color Generator](https://github.com/sahadev/RandomColorGenerator.git)
项目已发布至NPM，地址为：[random-color-generator2](https://www.npmjs.com/package/random-color-generator2)

TODOLIST:
 - 支持颜色模板可配置. 例如支持XXFFFF/XX0000/FFXXFF...
 - 支持步长可配置. 支持单次递增变化值: 1 ~ 255
 - 支持颜色随机范围可配置. 例如支持100 ~ 150的颜色范围区间
 - 支持递减