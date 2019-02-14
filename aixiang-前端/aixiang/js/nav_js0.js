/**
 *Creat by 惠普 on 2019/2/14.
 */
(function () {
    //下拉菜单部分
    //登录.注册
    var rigist_navs = document.querySelector('#rigist_nav');
    var login_navs = document.querySelector('#login_nav');
    var share_navs = document.querySelector('#share_nav');
    var new_navs = document.querySelector('#new_nav');
    if (rigist_navs) {
        rigist_navs.onclick = function () {
            location.href = '../html/login.html'
        };
    }
    if (login_navs) {
        login_navs.onclick = function () {
            location.href = ''
        }
    }
    var token = window.localStorage && window.localStorage.getItem('token');
    if (token) {
        rigist_navs.classList.add('disappear');
        login_navs.classList.remove('disappear');
        share_navs.classList.remove('disappear');
        new_navs.classList.remove('disappear');

    } else {
        if (rigist_navs.classList.contains('disappear')) {
            rigist_navs.classList.remove('disappear');
            login_navs.classList.add('disappear');
            share_navs.classList.add('disappear');
            new_navs.classList.add('disappear')
        } else {
            login_navs.classList.add('disappear');
            share_navs.classList.add('disappear');
            new_navs.classList.add('disappear')
        }
    }
    //登录后的下拉菜单
    var drop_down_one = document.querySelector('.drop_down_one');
    var dropdown_menu_one = document.querySelector('.dropdown-menu_one');
    var drop_down_two = document.querySelector('.drop_down_two');
    var dropdown_menu_two = document.querySelector('.dropdown-menu_two');
    var drop_down_three = document.querySelector('.drop_down_three');
    var dropdown_menu_three = document.querySelector('.dropdown-menu_three');
    var drop_down_four = document.querySelector('.drop_down_four');
    var dropdown_menu_four = document.querySelector('.dropdown-menu_four');

    var time = null;
    var time_two = null;
    var time_three = null;
    var time_four = null;
    //头像框处的下拉菜单
    drop_down_one.onmouseover = function () {
        dropdown_menu_one.style = 'display:block';
        clearTimeout(time)
    };
    drop_down_one.onmouseout = function () {
        time = setTimeout(function () {
            dropdown_menu_one.style = 'display:none'
        }, 500);
    };
    dropdown_menu_one.onmouseover = function () {
        clearTimeout(time)
    };
    dropdown_menu_one.onmouseout = function () {
        time = setTimeout(function () {
            dropdown_menu_one.style = 'display:none'
        }, 500);
    };

    //消息处下拉菜单
    drop_down_two.onmouseover = function () {
        dropdown_menu_two.style = 'display:block';
        clearTimeout(time_two)
    };
    drop_down_two.onmouseout = function () {
        time_two = setTimeout(function () {
            dropdown_menu_two.style = 'display:none'
        }, 500);
    };
    dropdown_menu_two.onmouseover = function () {
        clearTimeout(time_two)
    };
    dropdown_menu_two.onmouseout = function () {
        time_two = setTimeout(function () {
            dropdown_menu_two.style = 'display:none'
        }, 500);
    };

    // 发布下拉菜单
    drop_down_three.onmouseover = function () {
        dropdown_menu_three.style = 'display:block';
        clearTimeout(time_three)
    };
    drop_down_three.onmouseout = function () {
        time_three = setTimeout(function () {
            dropdown_menu_three.style = 'display:none'
        }, 500);
    };
    dropdown_menu_three.onmouseover = function () {
        clearTimeout(time_three)
    };
    dropdown_menu_three.onmouseout = function () {
        time_three = setTimeout(function () {
            dropdown_menu_three.style = 'display:none'
        }, 500);
    };

    //分类
    drop_down_four.onmouseover = function () {
        dropdown_menu_four.style = 'display:block';
        clearTimeout(time_four)
    };
    drop_down_four.onmouseout = function () {
        time_four = setTimeout(function () {
            dropdown_menu_four.style = 'display:none'
        }, 500);
    };
    dropdown_menu_four.onmouseover = function () {
        clearTimeout(time_four)
    };
    dropdown_menu_four.onmouseout = function () {
        time_four = setTimeout(function () {
            dropdown_menu_four.style = 'display:none'
        }, 500);
    };
    //功能键
    var span_outs=document.querySelector('.span_out');
    span_outs.onclick=function () {
        localStorage.clear();
        location.reload();
    }
})();