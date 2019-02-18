/**
 *Creat by 惠普 on 2019/1/18.
 */
(function () {
    var token = window.localStorage && window.localStorage.getItem('token');
//动态添加每日精选的active标签
    //选中效果
    var tops = document.querySelector('.left_share ul .active_li_top');
    var buttons = document.querySelector('.left_share ul .active_li_button');
    var content_one = document.querySelector('.middle_share_one');
    var content_two = document.querySelector('.middle_share_two');
    tops.onclick = function () {
        this.classList.add('active');
        this.classList.remove('buuu');
        if (content_one.classList.contains('display_none')) {
            content_one.classList.remove('display_none');
        }
        content_two.classList.add('display_none');
        if (this.nextElementSibling.classList.contains('active')) {
            this.nextElementSibling.classList.remove('active');
        }
        this.nextElementSibling.classList.add('buuu')

    };
    buttons.onclick = function () {
        this.classList.add('active');
        this.classList.remove('buuu');
        if (content_two.classList.contains('display_none')) {
            content_two.classList.remove('display_none');
        }
        content_one.classList.add('display_none');
        if (this.previousElementSibling.classList.contains('active')) {
            this.previousElementSibling.classList.remove('active');
        }
        this.previousElementSibling.classList.add('buuu')
    };
    //动态添加
    var skin_products = [
        {
            'imgs': '../img/icon_4.png',
            'p1': '小A',
            'p2': '这是他的说明',
            'jieshao': '这里吧啦吧啦一大堆字',
            'imgs2': '../img/test01.jpg'
        },
        {
            'imgs': '../img/icon_4.png',
            'p1': '小A',
            'p2': '这是他的说明',
            'jieshao': '这里吧啦吧啦一大堆字',
            'imgs2': '../img/test01.jpg'
        },
        {
            'imgs': '../img/icon_4.png',
            'p1': '小A',
            'p2': '这是他的说明',
            'jieshao': '这里吧啦吧啦一大堆字',
            'imgs2': '../img/test01.jpg'
        }
    ]; //内容
    var skin_products_tt = [
        {
            'imgs': '../img/icon_4.png',
            'p1': '小B',
            'p2': '这是他的说明',
            'jieshao': '这里吧啦吧啦一大堆字',
            'imgs2': '../img/test01.jpg'
        },
        {
            'imgs': '../img/icon_4.png',
            'p1': '小B',
            'p2': '这是他的说明',
            'jieshao': '这里吧啦吧啦一大堆字',
            'imgs2': '../img/test01.jpg'
        },
        {
            'imgs': '../img/icon_4.png',
            'p1': '小B',
            'p2': '这是他的说明',
            'jieshao': '这里吧啦吧啦一大堆字',
            'imgs2': '../img/test01.jpg'
        }
    ]; //内容
    var celebritys = [
        {
            'imgs': '../img/celebrity_img.jpeg',
            'name': '他的名字',
            'celebrity_introduce': '他的简介:',
            'Speciality': '1',
            'a_a': '关注'
        },
        {
            'imgs': '../img/celebrity_img.jpeg',
            'name': '他的名字',
            'celebrity_introduce': '他的简介:',
            'Speciality': '2',
            'a_a': '关注'
        },
        {
            'imgs': '../img/celebrity_img.jpeg',
            'name': '他的名字',
            'celebrity_introduce': '他的简介:',
            'Speciality': '3',
            'a_a': '关注'
        },
        {
            'imgs': '../img/celebrity_img.jpeg',
            'name': '他的名字',
            'celebrity_introduce': '他的简介:',
            'Speciality': '4',
            'a_a': '关注'
        }
    ];

    //内容块
    function load(data) {
        var content = document.querySelector('.body_container .body_left .middle_share_one');
        var content_tt = document.querySelector('.body_container .body_left .middle_share_two');
        for (let good of data) {
            content.innerHTML += ` <div class="middle_big_content">
                    <div class="middle_content">
                        <!--头像加名字-->
                        <div class="top_icon">
                            <div class="top_icon_left"><img src="${good.icon_url}" alt="error"></div>
                            <div class="top_icon_right"><p class="p_one"><strong>${good.nickname}</strong></p>
                                <p class="p_two">${good.titles}</p>
                            </div>
                        </div>
                        <!--文本-->
                        <div class="middle_span"><span class="abstract_span">${good.title}</span></div>
                        <!--图片-->
                        <div class="button_img"><img src="${good.article_url}" alt="error"></div>
                    </div>
                    <div style="width: 100%;height: 1px;background-color: #CCCCCC"></div>
                    <div class="point">
                        <div class="point_0 point_1 true"><img src="../img/praise.png" alt=""><span>赞</span></div>
                        <div class="point_hr"></div>
                        <div class="point_0 point_2 true"><img src="../img/collection.png" alt=""><span>收藏</span></div>
                        <div class="point_hr"></div>
                        <div class="point_0 point_3"><img src="../img/lue.png" alt=""><span>更多</span>
                            <!--<ul class="point_ul">-->
                            <!--<li>1</li>-->
                            <!--<li>2</li>-->
                            <!--<li>3</li>-->
                            <!--</ul>-->
                        </div>
                    </div>
                </div>`
        }
        for (let good of skin_products_tt) {
            content_tt.innerHTML += ` <div class="middle_big_content">
                    <div class="middle_content">
                        <!--头像加名字-->
                        <div class="top_icon">
                            <div class="top_icon_left"><img src="${good.imgs}" alt="error"></div>
                            <div class="top_icon_right"><p class="p_one"><strong>${good.p1}</strong></p>
                                <p class="p_two">${good.p2}</p>
                            </div>
                        </div>
                        <!--文本-->
                        <div class="middle_span"><span class="abstract_span">${good.jieshao}</span></div>
                        <!--图片-->
                        <div class="button_img"><img src="${good.imgs2}" alt="error"></div>
                    </div>
                    <div style="width: 100%;height: 1px;background-color: #CCCCCC"></div>
                    <div class="point">
                        <div class="point_0 point_1 true"><img src="../img/praise.png" alt=""><span>赞</span></div>
                        <div class="point_hr"></div>
                        <div class="point_0 point_2 true"><img src="../img/collection.png" alt=""><span>收藏</span></div>
                        <div class="point_hr"></div>
                        <div class="point_0 point_3"><img src="../img/lue.png" alt=""><span>更多</span>
                            <!--<ul class="point_ul">-->
                            <!--<li>1</li>-->
                            <!--<li>2</li>-->
                            <!--<li>3</li>-->
                            <!--</ul>-->
                        </div>
                    </div>
                </div>`
        }
    }

    //关注区域
    function celebrity_load(data) {
        var contents = document.querySelector('.body_right .celebrity .celebrity_ul ul');
        for (let celebrity_man of data) {
            contents.innerHTML += `<div class="celebrity_1">
                            <div class="celebrity_img"><img src="${celebrity_man.icon}" height="60" width="60"/>
                            </div>
                            <div class="celebrity_desc">
                                <p class="celebrity_p">${celebrity_man.name}</p>
                                <span class="celebrity_p_span">他的简介:<b>${celebrity_man.title}</b></span>
                            </div>
                            <a href="javascript:void(0)" class="a_no_active">关注</a>
                        </div>`
        }
        var follows = document.querySelectorAll('.body_right .celebrity .celebrity_ul ul a');
        for (var follow of follows)
            follow.onclick = function () {
                if (token) {
                    if (this.classList.contains('a_active')) {
                        this.classList.remove('a_active');
                        this.innerText = "关注"
                    } else {
                        this.classList.add('a_active');
                        this.innerText = "已关注"
                    }
                } else {
                    sessionStorage.setItem('from', 'home.html');
                    alert('请先登录');
                    location.href = 'login.html'
                }

            }
    }
        //获取头像
        function nav_icon(data) {
            var nav_icons=document.querySelector('#nav_icon');
            nav_icons.innerHTML=`<img src="${data[0].iocns}"
                alt="error"><span>${data[0].nickname}</span>`;
        }

    //回到顶部+固定二维码
    var btn = document.querySelector('#btnn');
    //二维码
    var oDiv = document.getElementById("fixPara");
    var btnheight = document.documentElement.clientHeight || document.body.clientHeight;
    //offsetTop网页可见区域高度
    var Hights = oDiv.offsetTop + oDiv.height * 1.3;
    window.onscroll = function () {
        var btntop = document.documentElement.scrollTop || document.body.scrollTop;
        if (Hights <= btntop) {
            oDiv.style = "position:fixed;top:100px;"
        } else {
            oDiv.style = ""
        }
        if (btntop >= btnheight * 0.8) {
            btn.style.display = 'block'
        } else {
            btn.style.display = 'none'
        }
    };
    btn.onclick = function () {
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20);
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 3); //设置时间
    };


    window.onload = function () {
        postData('http://192.168.2.31:8080/api/home/data', null, function (res) {
            load(res.results);
            var praise_checkeds = document.querySelectorAll('.point_1');
            var collection_checkeds = document.querySelectorAll('.point_2');

            for (var praise_checked of praise_checkeds) {
                praise_checked.onclick = function () {
                    if (token) {
                        if (this.classList.contains('true')) {
                            this.children[0].src = '../img/praise_check.png ';
                            this.children[0].nextElementSibling.innerHTML = '1';
                            this.classList.remove('true')
                        } else {
                            this.children[0].src = '../img/praise.png ';
                            this.children[0].nextElementSibling.innerHTML = '赞';
                            this.classList.add('true')
                        }
                    } else {
                        sessionStorage.setItem('from', 'home.html');
                        alert('请先登录');
                        location.href = '../html/login.html'
                    }
                }
            }
            for (var collection_checked of collection_checkeds) {
                collection_checked.onclick = function () {
                    if (token) {
                        if (this.classList.contains('true')) {
                            this.children[0].src = '../img/collection_check.png ';
                            this.children[0].nextElementSibling.innerHTML = '1';
                            this.classList.remove('true')
                        } else {
                            this.children[0].src = '../img/collection.png ';
                            this.children[0].nextElementSibling.innerHTML = '收藏';
                            this.classList.add('true')
                        }
                    } else {
                        sessionStorage.setItem('from', 'home.html');
                        alert('请先登录');
                        location.href = '../html/login.html'
                    }
                }
            }
        });

        postData('http://192.168.2.31:8080/api/home/celebrity', null, function (res) {
            //换一换
            celebrity_load(res.results);
            var huanyihuan = document.querySelector('.huanyihuan');
            huanyihuan.onclick = function () {
                var contents = document.querySelector('.body_right .celebrity .celebrity_ul ul');
                contents.innerHTML = ``;
                postData('http://192.168.2.31:8080/api/home/celebrity', null, function (res){
                    celebrity_load(res.results)
                });
            };
        });
        if (token) {
        getData('http://192.168.2.31:8080/api/home/nav', null, {"token": token}, function (res) {
            nav_icon(res.results)
        })
    }

    }

})();

