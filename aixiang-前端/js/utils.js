/**
 *Creat by 惠普 on 2019/1/25.
 */
function getData(url,args=null,cb) {
    var oAjax=null;
    oAjax=new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    if (args) {
        for (var key in args){
            url=addURLParam(url,key,args[key]);
        }
    }
    oAjax.open('get',url,true);
    // if (headers){
    //     for (var key in headers){
    //         oAjax.setRequestHeader(key,headers[key]);
    //     }
    // }
    oAjax.send(null);
    oAjax.onreadystatechange=function () {
        if (oAjax.readyState==4){
            if (oAjax.status>=200&oAjax.status<300||oAjax.status==304){
                var con=JSON.parse(oAjax.responseText);
                cb(con);
            } else {
                window.sessionStorage.setItem('status',oAjax.status);
                window.sessionStorage.setItem('statusText',oAjax.statusText);
                location.href='\'https://www.duitang.com/404/';
            }
        }
    }
    function addURLParam(url,name,value) {
        url+=(url.indexOf("?")==-1)?"?":"&";
        url+=encodeURIComponent(name)+"="+encodeURIComponent(value);
        return url;
    }
}

function postData(url,args=null,cb) {
    var oAjax=null;
    oAjax=new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    oAjax.open('post',url,true);
    oAjax.setRequestHeader('Content-Type','application/json');
    oAjax.send(JSON.stringify(args));
    oAjax.onreadystatechange=function () {
        if (oAjax.readyState==4) {
            if (oAjax.status>=200&&oAjax.status<300||oAjax==304){
                var con=JSON.parse(oAjax.responseText);
                cb(con);
            } else {
                window.sessionStorage.setItem('statue',oAjax.status);
                window.sessionStorage.setItem('statusText',oAjax.statusText);
                location.href='https://www.duitang.com/404/'
            }
        }
    }
}
