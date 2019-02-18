function changeFile(ele){
    var video = ele.files[0];
    var url = URL.createObjectURL(video);
    document.getElementById("aa").src = url;
    document.getElementById("aa").style.display='block'

}

// 上传视频封面
document.getElementById("oInput").addEventListener("change",function(e){
    var files = this.files;

    var img = new Image();
    var render  = new FileReader();
    render.readAsDataURL(files[0]);
    render.onloadstart = function(){
//				alert("start")
    };
    render.onload = function(){
        img.src = this.result;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        var oDiv = document.getElementById("oDiv");
        oDiv.innerHTML = "";

        oDiv.appendChild(img);
//				alert("success");
    };
    render.onloadend = function(){
//				alert("end");
    }
});


var movie=document.getElementById('aa');
var head=document.querySelector('.main .main-body1 .main-02 .main02-01');
var describe=document.getElementById('tet1');
var pag=document.querySelector('.main .main-body1 .main-02 .main02-02');
var cove=document.querySelector('#oDiv img');

var user={"video_url":"movie.src","title":"head.value","represent":"describe.value","pag":"pag.value","cover_url":"cove.src","uuser_id":"1"};
    var pulish=document.getElementById('publish');
    pulish.onclick=function () {
        postData('http://192.168.2.6:8080/api/life_artist/releasevideo/', user, function (res) {
            console.log(res.status_code)
            if (res.status_code==1002){
                location.href='../html/life_artist.html'
            }


        });
    };