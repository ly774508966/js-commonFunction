//关于数组操作的一些函数

//判断值是否是数组
function isArray(value) {
    return value instanceof Array;
}

//数组去重  start 
function uniqueArr (array) {
    var newArr = [];
    var obj = {};
    var len = array.length;
    for (var i = 0; i < len; i++) {
        if (!obj[array[i]]) {
            obj[array[i]] = array[i];
            newArr.push(array[i]);
        }
    }
    return newArr;
}

function uniqueArr (array) {
    var newArr = [];
    var len = array.length;
    for (var i = 0; i < len; i++) {
        if (newArr.indexOf(array[i]) == -1) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

//es6写法
function uniqueArr (array) {
    return [...new Set(array)]
}

//数组去重  end 

//找出数组中的最大值
//es5的写法
function findMaxOfArr (array) {
    var maxValue = Math.max.apply(null, array);
    return maxValue;
}
//es6的写法
function findMaxOfArr (array) {
    let maxValue = Math.max(...array);
    return maxValue;
}


//找出数组中的最小值
//es5的写法
function findMinOfArr (array) {
    var minValue = Math.min.apply(null, array);
    return minValue;
}
//es6的写法
function findMinOfArr (array) {
    let minValue = Math.min(...array);
    return minValue;
}

//复制数组
//es5的写法
function copyArr (array) {
    var arr = [].concat(array);
    return arr;
}

//es6的写法
function copyArr (array) {
    let arr = [...array];
    return arr;
}

//将类数组对象转为真正的数组
//es5写法
function transformObjToArr (obj) {
    var arr = [].slice.call(obj);
    return arr;
}
//es6写法
function transformObjToArr (obj) {
    let arr = Array.from(obj);
    return arr;
}


