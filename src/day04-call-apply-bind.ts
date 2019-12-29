// call
// 1. 函数设为对象的属性
// 2. 执行函数，删除这个属性
// 3. 指定 this 并传入指定参数执行函数，this 默认指向 window

// @ts-nocheck


Function.prototype.call2 = function(content = window, ...args){
    content.fn = this;
    let result = content.fn(...args);
    delete content.fn;
    return result;
}

// apply
// 区别只是参数为数组，需要判断参数是否存在
Function.prototype.apply2 = function(content = window, arr){
    content.fn = this;
    let res
    if(arr) {
        res = content.fn(...arr);
    } else {
        res = content.fn()
    }
    delete content.fn;
    return res;
}

Function.prototype.bind2 = function(content) {
    if(typeof this !== 'function') {
        throw Error('not a function')
    }
}

let foo = {
    value: 1
}

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}
bar.call2(foo, 'black', '18')
bar.apply(foo, ['black', '18'])

