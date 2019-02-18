/**
 *Creat by 惠普 on 2019/1/23.
 */
(function () {
    var tops = document.querySelector('.left_share ul .active_li_top');
    var buttons = document.querySelector('.left_share ul .active_li_button');
    var right_dynamic = document.querySelector('.right_dynamic');
    var right_news = document.querySelector('.right_news');
    var token = window.localStorage && window.localStorage.getItem('token');
    tops.onclick = function () {
        this.classList.add('active');
        this.classList.remove('buuu');
        if (this.nextElementSibling.classList.contains('active'))
            this.nextElementSibling.classList.remove('active');
        if (right_dynamic.classList.contains('notshow')) {
            right_dynamic.classList.remove('notshow')
        }
        right_news.classList.add('notshow');
        this.nextElementSibling.classList.add('buuu')

    };
    buttons.onclick = function () {
        this.classList.add('active');
        this.classList.remove('buuu');
        if (this.previousElementSibling.classList.contains('active'))
            this.previousElementSibling.classList.remove('active');
        if (right_news.classList.contains('notshow')) {
            right_news.classList.remove('notshow')
        }
        right_dynamic.classList.add('notshow');
        this.previousElementSibling.classList.add('buuu')
    };
    // var lis = document.querySelectorAll('.right_dynamic ul li');
    // var divs = document.querySelectorAll('.right_dynamic .right_button');
    // for (var i = 0; i < lis.length; i++) {
    //     lis[i].id = i;
    // }
    // for (var li of lis) {
    //     li.onclick = function () {
    //         for (var divss of divs) {
    //             divss.classList.add('notshow')
    //         }
    //
    //
    //     }
    // }
    function getid(id) {
        //如果传入的参数类型为字符串则获取当前ID元素，否则返回id
        return typeof id === "string" ? document.getElementById(id) : id;
    }


    function getnodename(id01, id02) {
        //window.onload表示当文档加载完毕时执行函数
        window.onload = function () {
            //获取#notice-tit下面的全部li元素

            var titles = getid(id01).getElementsByTagName('li');

            //获取#notice-con下面的全部div元素
            var divs = getid(id02).children;
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
    }
    function apple(id03, id04) {
        //window.onload表示当文档加载完毕时执行函数
        this.onclick = function () {
            //获取#notice-tit下面的全部li元素

            var a = getid(id03).getElementsByTagName('li');

            //获取#notice-con下面的全部div元素
            var b = getid(id04).children;
            //遍历所有li标签，给每个li加上id和值，并且绑定事件
            for (var i = 0; i < a.length; i++) {
                //给每个li加上id和值
                a[i].id = i;
                //给每个li绑定事件
                a[i].onclick = function () {
                    //悬浮后首先应该初始化每个li和div上的类和display
                    for (var j = 0; j < a.length; j++) {
                        a[j].className = "";
                        b[j].style.display = "none";

                    }
                    //给当前悬浮元素添加属性
                    a[event.target.id].className = "select";
                    b[event.target.id].style.display = "block";
                }
            }
        }
    }

    getnodename(myTab, myTabContent);
    apple(appleone,appletwo)
    //获取头像
    function nav_icon(data) {
        var nav_icons=document.querySelector('#nav_icon');
        nav_icons.innerHTML=`<img src="${data[0].iocns}"
                alt="error"><span>${data[0].nickname}</span>`;
    }
    if (token) {
        getData('http://192.168.2.31:8080/api/home/nav', null, {"token": token}, function (res) {
            nav_icon(res.results)
        })
    }
})();