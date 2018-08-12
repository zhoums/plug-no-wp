var $http = function(method,uri,data){
    return new Promise((resolve,reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(method, uri, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");//缺少这句，后台无法获取参数
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                // JSON解析器不会执行攻击者设计的脚本.
                var resp = JSON.parse(xhr.responseText);
                resolve(resp);
            }
        }
        xhr.send(data);
    })

}
var sleep= function(fn){
    var time = Math.random()*(60-13+1)+13;
    setTimeout(fn,time*1000)
}