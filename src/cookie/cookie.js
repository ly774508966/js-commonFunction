//关于cookie操作的一些函数

//设置cookie
function setCookie(key,value,expires,domain,path) {
    var encodeKey = encodeURIComponent(key);
    var encodeValue = encodeURIComponent(value);
    var keyExpires = expires.toUTCString();
    document.cookie = encodeKey + '=' + encodeValue + ';expires=' + keyExpires + ';domain=' + domain + ';path=' + path;
}
//获取cookie
function getCookie(key){
    var encodeKey = encodeURIComponent(key);
    var allCookie = document.cookie.split(';');
    var cookie,len = allCookie.length;
    for (var i = 0; i < len; i++) {
        cookie = allCookie[i].split('=');
        if (encodeKey == cookie[0]) {
            return cookie[1];
        }   
    }
    return '';
}

//删除cookie
function delCookie(key,domain,path){
    var encodeKey = encodeURIComponent(key);
    var expires = new Date(0);
    document.cookie = encodeKey + '=' + ';expires=' + expires.toUTCString() + ';domain=' + domain + ';path=' + path;
}
  