//获取id封装成一个函数$()方便调用
function $(id) {
    //如果传入的参数类型为字符串则获取当前ID元素，否则返回id
    return typeof id === "string" ? document.getElementById(id) : id;
}

//window.onload表示当文档加载完毕时执行函数
window.onload = function () {
    function nav_icon(data) {
        var nav_icons=document.querySelector('#nav_icon');
        nav_icons.innerHTML=`<img src="${data[0].iocns}"
                alt="error"><span>${data[0].nickname}</span>`;
    }
    var token = window.localStorage && window.localStorage.getItem('token');
    if (token) {
        getData('http://192.168.2.31:8080/api/home/nav', null, {"token": token}, function (res) {
            nav_icon(res.results)
        })
    }

    //获取#notice-tit下面的全部li元素
    var titles = $('myTab').getElementsByTagName('li');
    //获取#notice-con下面的全部div元素
    var divs = $('myTabContent').querySelectorAll('#myTabContent>div');
    //遍历所有li标签，给每个li加上id和值，并且绑定事件
    for (var i = 0; i < titles.length; i++) {
        //给每个li加上id和值
        titles[i].id = i;
        //给每个li绑定事件
        titles[i].onclick = function () {
            //悬浮后首先应该初始化每个li和div上的类和display
            for (var j = 0; j < titles.length; j++) {
                titles[j].className = "";
                divs[j].style.display = "none";
            }
            //给当前悬浮元素添加属性
            titles[this.id].className = "select";
            divs[this.id].style.display = "block";
        }
    }
}

