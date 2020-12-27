/*
 * @Author: 冷弋白
 * @LastEditTime: 2020-12-13 19:34:33
 */
window.onload = function () {
    const newLocal = '加载完成！';
    display(newLocal);
}
/********* 弹窗 ********/
var alert = document.querySelector('.alert');
var timer = 0;
function display(str) {
    alert.style.top = '35px';
    alert.style.opacity = '1';
    alert.innerHTML = str;
    timer = setTimeout(function () {
        alert.style.top = '-50px';
        alert.style.opacity = '0';
        console.log('执行');
    }, 4000)
}
/**********获取设置信息 **********/
var cube = document.querySelector('.cube');//获取正方体的大盒子
var ul = cube.querySelector('ul');//获取大盒子内的正方体
var li = ul.querySelectorAll('li');//获取正方体每个面
var sensitive = 1; //灵敏度调节
var animationDuration = document.querySelector('.animationDuration').querySelector('input');//获取动画时长输入框
var getSetSensitive = document.querySelector('.sensitivity').querySelector('input');//获取灵敏度输入框
var getSetColor = document.querySelector('.color').querySelectorAll('input');//获取设置的所有颜色选择器
var getSetXLimit = document.querySelector('.xLimit').querySelector('input');//获取解除X轴限制选项


/**********设置过渡动画时长 **********/
animationDuration.onblur = function () {
    /****** 通用弹窗 *****/
    clearTimeout(timer)
    alert.style.backgroundColor = 'white';
    alert.style.color = 'black';
    var twinkle1 = setInterval(() => {
        alert.style.backgroundColor = 'rgb(51, 51, 51)';
        alert.style.color = 'white';
    }, 250);
    var twinkle2 = setInterval(() => {
        alert.style.backgroundColor = 'white';
        alert.style.color = 'black';
    }, 500);
    setTimeout(() => {
        clearInterval(twinkle1);
        clearInterval(twinkle2);
    }, 750);
    /****** 通用弹窗 *****/

    if (parseFloat(animationDuration.value) >= 0) {
        display('旋转时间您已设置为' + animationDuration.value + '秒')
        getTime.innerHTML = animationDuration.value + '秒';
        ul.style.transitionDuration = animationDuration.value + 's';
    } else if (animationDuration.value == '') {
        display('   旋转时间您选择了留空,已恢复默认');
        ul.style.transitionDuration = '0.075s';
        getTime.innerHTML = '0.075秒';
    } else {
        display('时间可不要乱填哦！');

    }
}

/**********灵敏度调节 **********/
getSetSensitive.onblur = function () {
    /****** 通用弹窗 *****/
    clearTimeout(timer)
    alert.style.backgroundColor = 'white';
    alert.style.color = 'black';
    var twinkle1 = setInterval(() => {
        alert.style.backgroundColor = 'rgb(51, 51, 51)';
        alert.style.color = 'white';
    }, 250);
    var twinkle2 = setInterval(() => {
        alert.style.backgroundColor = 'white';
        alert.style.color = 'black';
    }, 500);
    setTimeout(() => {
        clearInterval(twinkle1);
        clearInterval(twinkle2);
    }, 750);
    /****** 通用弹窗 *****/

    if (parseFloat(getSetSensitive.value) > 0) {
        display('灵敏度您已设置为' + getSetSensitive.value)
        getSensitive.innerHTML = getSetSensitive.value;
        sensitive = getSetSensitive.value;
    } else if (getSetSensitive.value == '') {
        display('灵敏度您选择了留空,已恢复默认');
        sensitive = 1;
    } else {
        display('灵敏度可不要乱填哦！');

    }
}

/********** 解除X轴限制 **********/
getSetXLimit.onclick = function () {
    console.log(getSetXLimit.checked);
    /****** 通用弹窗 *****/
    clearTimeout(timer)
    alert.style.backgroundColor = 'white';
    alert.style.color = 'black';
    var twinkle1 = setInterval(() => {
        alert.style.backgroundColor = 'rgb(51, 51, 51)';
        alert.style.color = 'white';
    }, 250);
    var twinkle2 = setInterval(() => {
        alert.style.backgroundColor = 'white';
        alert.style.color = 'black';
    }, 500);
    setTimeout(() => {
        clearInterval(twinkle1);
        clearInterval(twinkle2);
    }, 750);
    /****** 通用弹窗 *****/

    if (getSetXLimit.checked) {
        display('您已解除X轴范围旋转限制，尽情翻滚吧！')
        flag = 0;
        getFixed.innerHTML = '已解除'
    } else {
        display('您已开启X轴范围旋转限制')
        flag = 1;
        getFixed.innerHTML = '已锁定'
    }
}






/********** 获取调试信息 **********/
var Test = document.querySelector('.Test');//获取调试信息大盒子
var test = Test.querySelector('.test')
var getTime = test.querySelectorAll('i')[0];//获取调试信息内旋转时间
getTime.innerHTML = '0.075秒';
var getSensitive = test.querySelectorAll('i')[1];//获取调试信息内灵敏度
getSensitive.innerHTML = sensitive;
var getFixed = test.querySelectorAll('i')[2];//获取调试信息内解除X
getFixed.innerHTML = '已锁定';
var getColor = test.querySelectorAll('span');//获取调试信息内颜色
for (var i = 0; i < getColor.length; i++) {
    getColor[i].style.backgroundColor = 'black';
}
for (var i = 0; i < getSetColor.length; i++) {
    getSetColor[i].onblur = function () {
        var arr = [];
        for (var j = 0; j < getSetColor.length; j++) {
            arr.push(getSetColor[j].value);
            getColor[j].style.backgroundColor = arr[j];
            li[j].style.backgroundColor = arr[j];
        }
    }
}
var getTheme = test.querySelectorAll('i')[3];//获取调试信息内主题
getTheme.innerHTML = '深色模式';
var getSize = test.querySelectorAll('i')[4];//获取调试信息内正方体宽高
getSize.innerHTML = '300px';
var input = document.querySelectorAll('input');
for (var i = 0; i < input.length; i++) {
    input[i].onblur = function () {

    }
}
