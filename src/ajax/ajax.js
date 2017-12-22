// 基于jquery封装的常见请求

function requestVM() {
    var self = this;
    self.sendReq = function(option) {
        $.ajax({
            url: option.url,
            type: option.type,
            data: option.data,
            processData: option.processData || true,
            contentType: option.contentType || 'application/json',
            async: option.async || true ,
            cache: option.cache,
            dataType: option.dataType || 'json',
            traditional: option.traditional || true,
            headers: option.headers || {},
            beforeSend: function(XHR) {
                option.beforeSend && option.beforeSend(XHR);
            },
            success: function(data, textStatus, jqXHR) {
                option.success && option.success(data, textStatus, jqXHR);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                option.error && option.error(jqXHR, textStatus, errorThrown);
            },
            complete: function(jqXHR, textStatus) {
                option.complete && option.complete(jqXHR, textStatus);
            }
        })
    }

    //封装get请求
    self.cGet = function(option) {
        option.type = 'GET';
        self.sendReq(option);
    }
    //封装post请求
    self.cPost = function(option) {
        option.type = 'POST';
        self.sendReq(option);
    }
    //封装put请求
    self.cPut = function(option) {
        option.type = 'PUT';
        self.sendReq(option);
    }
    //封装delete请求
    self.cDelete = function(option) {
        option.type = 'DELETE';
        self.sendReq(option);
    }
}
