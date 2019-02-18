// function load1() {
//     var category1=document.querySelector('#myTabContent .main-125 .main025');
//     for(var i=0;i<15;i++){
//         category1.innerHTML+=`<li class="main025-01">
//                                 <div><a href=""><img src="https://b-ssl.duitang.com/uploads/files/201312/19/20131219204737_XVinc.thumb.48_48_c.jpeg" alt=""></a></div>
//                                 <div class="main025-011">
//                                     <a href="">眼妆</a>
//                                     <div>关注<span>11</span>&nbsp;&nbsp;&nbsp;&nbsp;粉丝<span>11</span></div>
//                                 </div>
//                                 <div class="main025-012"><a href="">关注</a></div>
//                             </li>`
//     }
// }
// load1();
//
//
// function load2() {
//     var category1=document.getElementById('ul1');
//     for(var i=0;i<6;i++){
//         category1.innerHTML+=`<li><a href="">动漫</a></li>`
//     }
// }
// load2();
//
// function load3() {
//     var category1=document.getElementById('ul2');
//     for(var i=0;i<6;i++){
//         category1.innerHTML+=`<li><a href="">动漫</a></li>`
//     }
// }
// load3();

function Search() {
    var texts=document.querySelector('.form-group input');
    texts.value=sessionStorage.getItem('value')
    var cont = document.querySelector('#btn');
    var imgshow = document.querySelector('#myTabContent .main021');
    // cont.onclick = function () {

        if (texts.nodeName == 'INPUT')
        // alert(event.target.previousElementSibling.firstElementChild.value);
            var user = {"name": "%" + texts.value + "%"};
        // 图片栏
        postData('http://192.168.2.31:8080/api/search/picture/', user, function (res) {
            console.log(res.status_code);
            if ('status_code' in res){
                imgshow.innerText = res.status_text;
                imgshow.style.textAlign
            }
            else{
                imgshow.innerHTML = ``;
                for (var i of res) {
                    imgshow.innerHTML += `<div class="main021-0">
                                <div class="main021-01"><img src="${i.caption_url}" alt=""></div>
                                <div class="main021-02">${i.title}</div>
                                <div class="main021-03">
                                    <div class="main021-031"><img src="../img/praise.svg" alt=""><span>${i.praise_count}</span></div>
                                    <div><img src="../img/collect.svg" alt=""><span>${i.collect_count}</span></div>
                                </div>
                                <div class="main021-04">
                                    <a href=""><img src="${i.icon_url}" alt=""></a>
                                    <a href=""><p>${i.nickname}</p></a>
                                </div>
                            </div>`
                }
            }

        });
        // 专辑栏
        var albumshow = document.querySelector('#myTabContent .main022');
        postData('http://192.168.2.31:8080/api/search/album/', user, function (res) {
            albumshow.innerHTML = ``;
            for (var i of res) {
                console.log(i);
                albumshow.innerHTML += `<div class="main022-01">
                                <a href="">
                                    <div class="main022-011" style="display: flex; justify-content: space-between; position: relative; flex-flow: row wrap;">
                                        <img src="${i.album_url}" alt="">
                                    </div>
                                    <div class="main-022-012">
                                        <h3>${i.album_name}</h3>
                                        <p>53451图片 · 18575收藏</p>
                                    </div>
                                </a>
                            </div>`
            }
        });

        // 文章栏
        var articleshow = document.querySelector('#myTabContent .main023');
        postData('http://192.168.2.31:8080/api/search/article/', user, function (res) {
            articleshow.innerHTML = ``;
            for (var i of res) {
                articleshow.innerHTML += `<div class="main023-01">
                                <div class="main023-011">
                                    <a href=""><img src="${i.icon_url}" alt=""></a>
                                    <div class="main023-011-01"><p>${i.nickname}</p></div>
                                </div>
                                <p class="main023-012">${i.title}</p>
                                <a href="" class="main023-013">
                                    <div class="main023-013-01">
                                        <span><img src="../img/read.svg" alt="">文章</span>
                                        <img src="${i.article_cover}" alt="">
                                    </div>
                                </a>
                            </div>`
            }
        });

        // 达人栏
        var supermanshow = document.querySelector('#myTabContent .main025');
        postData('http://192.168.2.31:8080/api/search/superman/', user, function (res) {
            supermanshow.innerHTML = ``;
            for (var i of res) {
                supermanshow.innerHTML += `<li class="main025-01">
                                <div><a href=""><img src="${i.icon_url}" alt=""></a></div>
                                <div class="main025-011">
                                    <a href="">${i.nickname}</a>
                                    <div>关注<span>${i.follows}</span>&nbsp;&nbsp;&nbsp;&nbsp;粉丝<span>${i.fans}</span></div>
                                </div>
                                <div class="main025-012"><span class="main025-012-01" onclick="follow()">关注</span></div>
                            </li>`
            }
        });

}

Search();


// 达人栏的关注点击

// var follow=document.querySelector('#myTabContent .main025 .main025-01 .main025-012 .main025-012-01');
// alert(follow.className)
// follow.onclick=function () {
//     alert('a')
// }
//
function follow() {
    var aa = document.querySelectorAll('#myTabContent .main025 .main025-01 .main025-012 .main025-012-01');
    for (var j of aa) {
        j.onclick = function () {
            // this.inner = document.querySelectorAll('#myTabContent .main025 .main025-01 .main025-012 .main025-012-01');
            if (this.innerText='关注') {
                this.innerText = '已关注'
            } else {
                this.innerText = '关注'
            }

        }
    }

}


// alert(sessionStorage.getItem('value'))