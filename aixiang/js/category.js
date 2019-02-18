

// 下拉列表

var oUl = document.getElementById("list");
var aH1 = oUl.getElementsByTagName("SPAN");
var oU2 = oUl.getElementsByTagName("ul");
var oLi = null;
var arrLi = [];


for (var i = 0; i < aH1.length; i++) {
    aH1[i].index = i;
    aH1[i].onclick = function () {
        if (this.className == "") {
            oU2[this.index].style.display = "block";
            this.className = "active";
            // this.style.backgroundColor='#ff7e7e';
        } else {
            oU2[this.index].style.display = "none";
            this.className = "";
            // this.style.backgroundColor=''
        }
    }
}

for (i = 0; i < oU2.length; i++) {
    oLi = oU2[i].getElementsByTagName("li");
    for (j = 0; j < oLi.length; j++) {
        arrLi.push(oLi[j]); //数组中添加新元素
    }

}

for (i = 0; i < arrLi.length; i++) {
    arrLi[i].onclick = function () {
        for (i = 0; i < arrLi.length; i++) {
            arrLi[i].className = "";
        }
        this.className = "hover";
    }
}


function load() {
    var category=document.querySelector('.container .main .main02 .main021');
    for(var i=0;i<15;i++){
        category.innerHTML+=`<div class="main021-0">
                    <div class="main021-01"><img src="https://b-ssl.duitang.com/uploads/blog/201402/15/20140215060822_G285S.thumb.224_0.jpeg" alt=""></div>
                    <div class="main021-02">独家定制ipadAIR羊毛毡卡通保护套超级玛丽保护套</div>
                    <div class="main021-03">
                        <div class="main021-031"><img src="../img/praise.svg" alt=""><span>11</span></div>
                        <div><img src="../img/collect.svg" alt=""><span>1000</span></div>
                    </div>
                    <div class="main021-04">
                        <a href=""><img src="https://b-ssl.duitang.com/uploads/item/201201/19/20120119100539_vNuVc.thumb.24_24_c.jpg" alt=""></a>
                        <a href=""><p>皮皮虾轩辕黄帝</p></a>
                    </div>
                </div>`
    }
}
load();
function nav_icon(data) {
    var nav_icons=document.querySelector('#nav_icon');
    nav_icons.innerHTML=`<img src="${data[0].iocns}"
                alt="error"><span>${data[0].nickname}</span>`;
}
window.onload=function () {
    var token = window.localStorage && window.localStorage.getItem('token');
    if (token) {
        getData('http://192.168.2.31:8080/api/home/nav', null, {"token": token}, function (res) {
            nav_icon(res.results)
        })
    }

};