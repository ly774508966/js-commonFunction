//关于对象操作的一些函数

//判断值是否为对象
function isObject(value) {
    return value instanceof Object;
}
//对象的深拷贝
function deepCloneObj(obj) {
    var newObj = {};
	for(var i in obj){
		if(typeof obj[i] ==='object' && obj[i] !== null && !obj[i] instanceof Array) {
            newObj[i] = deepCloneObj(obj[i]);
        }else if(typeof obj[i] ==='object' && obj[i] !== null && obj[i] instanceof Array){
            newObj[i] = [].concat(obj[i]);
        }else {
            newObj[i] = obj[i];
        }	
	}
	return newObj;
}
//该方法具有局限性，无法克隆对象中的方法
function deepCloneObj2(obj) {
    return JSON.parse(JSON.stringify(obj));
}
