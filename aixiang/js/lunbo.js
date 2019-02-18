/**
 *Creat by 惠普 on 2019/1/21.
 */
(function () {
    var photo01 = document.querySelector('#ph001');
    var photo02 = document.querySelector('#ph002');
    var photo03 = document.querySelector('#ph003');
    var photos = document.querySelectorAll('.item');
    var time_one = null;
    var i=1;


    //左右图标
    var lefts = document.querySelector('.left');
    var rights = document.querySelector('.right');
    lefts.onclick = function () {
        clearInterval(timer);
        checkleft();
    };
    rights.onclick = function () {
        clearInterval(timer);
        checkright();
    };



    function checkleft() {
        if (i==0){
            i=3;
        }
        photos[i-1].classList.remove('active');
        if (i == 1) {
            photos[2].classList.add('active')
        } else {
            photos[i - 2].classList.add('active')
        }
       i--;
    }
    function checkright() {
        photos[i].classList.add('active');
        if (i == 0) {
            photos[2].classList.remove('active')
        } else {
            photos[i - 1].classList.remove('active')
        }
        i++;
        i=i%3;
    }
        time_one=window.setInterval(function () {
            checkright()
        },2000);

})();