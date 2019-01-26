/**
 *Creat by 惠普 on 2019/1/21.
 */
(function () {
    function rotate() {
        var photos = document.querySelectorAll('.item');
        var lefts = document.querySelector('.left');
        var rights = document.querySelector('.right');
        var inter;
        var index = 0;
        for (var photo of photos) {
            photo.onclick = function () {
                if (!this.classList.contains('ph03')) {
                    this.nextElementSibling.classList.add('active');
                    this.classList.remove('active')
                } else {
                    this.previousElementSibling.previousElementSibling.classList.add('active');
                    this.classList.remove('active')
                }
            }
        }

        // lefts.onclick=function () {
        //     if (!index){
        //         this.previousElementSibling.children[index-1].classList.add('active');
        //         this.previousElementSibling.children[index].classList.remove('active')
        //         index--;
        //         index=index%3
        //     }else{
        //         this.previousElementSibling.children[index+2].classList.add('active');
        //         this.previousElementSibling.children[index].classList.remove('active')
        //         index+=2;
        //         index=index%3
        //     }
        //
        // }

    }
    rotate()

})();