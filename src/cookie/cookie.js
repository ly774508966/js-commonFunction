//关于cookie操作的一些函数

//获取cookie值
function getCookie (cookieName) {
    var obj = {};
    var cookie = document.cookie.split(';'), len = cookie.length;
    for(var i = 0;i < len; i++){
    	var arr = cookie[i].trim().split('=');
    	obj[arr[0]] = arr[1];
    }
    if(cookieName in obj)
    	return obj[cookieName];
    else {
        return 'cookie中无该值';
    }
}

//设置cookie值
function setCookie (cookieName, cookieValue) {
    document.cookie = encodeURIComponent(cookieName) + '=' + encodeURIComponent(cookieValue);
}