//关于正则操作的一些函数

//邮箱验证
function checkMail (mail) {
    var reg=/^([\w+])+@\w+([.]\w+)+$/;
    return reg.test(mail);
}

//手机号码验证
function checkPhone (phone) {
    var reg=/^1((3[0-9])|(8[0-9])|(5[^4])|(4[5789])|(7[35678]))\d{8}$/;
    return reg.test(phone);
}

//中文验证
function checkChinese (value) {
    var reg = /[\u4e00-\u9fa5]+/;
    return reg.test(value);
}