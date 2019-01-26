/**
 *Creat by 惠普 on 2019/1/18.
 */
(function () {
    //动态添加每日精选的active标签
    //选中效果
    var tops = document.querySelector('.left_share ul .active_li_top');
    var buttons = document.querySelector('.left_share ul .active_li_button');
    tops.onclick = function () {
        this.classList.add('active');
        this.classList.remove('buuu');
        if (this.nextElementSibling.classList.contains('active'))
            this.nextElementSibling.classList.remove('active');
        this.nextElementSibling.classList.add('buuu')

    };
    buttons.onclick = function () {
        this.classList.add('active');
        this.classList.remove('buuu');
        if (this.previousElementSibling.classList.contains('active'))
            this.previousElementSibling.classList.remove('active');
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
    var celebritys = [
        {
            'imgs': '../img/celebrity_img.jpeg',
            'name':'他的名字',
            'celebrity_introduce':'他的简介:',
            'Speciality':'可怕',
            'a_a':'关注'
        },
        {
            'imgs': '../img/celebrity_img.jpeg',
            'name':'他的名字',
            'celebrity_introduce':'他的简介:',
            'Speciality':'可怕',
            'a_a':'关注'
        },
        {
            'imgs': '../img/celebrity_img.jpeg',
            'name':'他的名字',
            'celebrity_introduce':'他的简介:',
            'Speciality':'可怕',
            'a_a':'关注'
        },
        {
            'imgs': '../img/celebrity_img.jpeg',
            'name':'他的名字',
            'celebrity_introduce':'他的简介:',
            'Speciality':'可怕',
            'a_a':'关注'
        }
    ]

    function load(data) {
        var content = document.querySelector('.body_container .body_left .middle_share');
        for (let good of skin_products) {
            content.innerHTML += ` <div class="middle_big_content">
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
    function celebrity_load(data) {
        var contents = document.querySelector('.body_right .celebrity .celebrity_ul ul');
        for (let celebrity_man of celebritys) {
            contents.innerHTML += `<div class="celebrity_1">
                            <div class="celebrity_img"><img src="${celebrity_man.imgs}" height="60" width="60"/>
                            </div>
                            <div class="celebrity_desc">
                                <p class="celebrity_p">${celebrity_man.name}</p>
                                <span class="celebrity_p_span">${celebrity_man.celebrity_introduce}<b>${celebrity_man.Speciality}</b></span>
                            </div>
                            <a href="">${celebrity_man.a_a}</a>
                        </div>`
        }
    }

    //回到顶部+固定二维码
    var btn = document.querySelector('#btn');
    var oDiv = document.getElementById("fixPara")
    var btnheight = document.documentElement.clientHeight || document.body.clientHeight;
    var Hights = oDiv.offsetTop - oDiv.height / 2;
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




    load(skin_products);
    celebrity_load(celebritys);
    var praise_checkeds = document.querySelectorAll('.point_1');
    var collection_checkeds = document.querySelectorAll('.point_2');

    for (var praise_checked of praise_checkeds) {
        praise_checked.onclick = function () {
            if (this.classList.contains('true')) {
                this.children[0].src = '../img/praise_check.png ';
                this.children[0].nextElementSibling.innerHTML = '1';
                this.classList.remove('true')
            } else {
                this.children[0].src = '../img/praise.png ';
                this.children[0].nextElementSibling.innerHTML = '赞';
                this.classList.add('true')
            }

        }
    }
    for (var collection_checked of collection_checkeds) {
        collection_checked.onclick = function () {
            if (this.classList.contains('true')) {
                this.children[0].src = '../img/collection_check.png ';
                this.children[0].nextElementSibling.innerHTML = '1';
                this.classList.remove('true')
            } else {
                this.children[0].src = '../img/collection.png ';
                this.children[0].nextElementSibling.innerHTML = '收藏';
                this.classList.add('true')
            }

        }
    }


})();