// 上传封面
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


// 添加段落

// 添加段落和图片

var add=document.getElementById('add');
var category1=document.getElementById('content');
add.onclick=function () {
    category1.innerHTML+=`<div>
            <textarea name="" cols="30" rows="10" placeholder="请输入你要插入图片前的文章"></textarea>
            <div class="all">
                <div class="oDiv1">
                </div>
                <div class="tab01-011">
                    <label>
                        <input type="button" class="btn1" value="上传插图"><span id="text1"></span>
                        <input type="file" accept="image/*" class="oInput1" value=""/>
                    </label>
                    <span>删除</span>
                </div>
            </div>
        </div>`
    document.querySelector(".main .main2 .all .tab01-011 label .oInput1").addEventListener("change",function(e){
        var files1 = this.files;

        var img1 = new Image();
        var render1  = new FileReader();
        render1.readAsDataURL(files1[0]);
        render1.onloadstart = function(){
//				alert("start")
        };
        render1.onload = function(){

            img1.src = this.result;
            img1.style.width = "100%";
            img1.style.height = "100%";
            img1.style.objectFit = "cover";
            var oDiv1 = document.querySelector(".main .main2 .all .oDiv1");
            oDiv1.innerHTML = "";

            oDiv1.appendChild(img1);
//				alert("success");
        };
        render1.onloadend = function(){
//				alert("end");
        }
    });
    // 上传插图
}
document.querySelector(".main .main2 .all .tab01-011 label .oInput1").addEventListener("change",function(e){
    var files1 = this.files;

    var img1 = new Image();
    var render1  = new FileReader();
    render1.readAsDataURL(files1[0]);
    render1.onloadstart = function(){
//				alert("start")
    };
    render1.onload = function(){

        img1.src = this.result;
        img1.style.width = "100%";
        img1.style.height = "100%";
        img1.style.objectFit = "cover";
        var oDiv1 = document.querySelector(".main .main2 .all .oDiv1");
        oDiv1.innerHTML = "";

        oDiv1.appendChild(img1);
//				alert("success");
    };
    render1.onloadend = function(){
//				alert("end");
    }
});

