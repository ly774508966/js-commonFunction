//给元素绑定回车事件
function enterEvent (element, listener) {
    element.addEventListener('keydown', function (event) {
        var e = event || window.event;
        if (e.keyCode === 13) {
            listener();
        }
    }, false);
}
//返回以x为底y的对数
function logxy (x, y) {
    return Math.ceil(Math.log(y)/Math.log(x));
}
