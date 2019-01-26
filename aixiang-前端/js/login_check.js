/**
 *Creat by 惠普 on 2019/1/25.
 */

var telephone=document.querySelector('#telephone');
var telephone_error=document.querySelector('#tel_error');
var password=document.querySelector('.password input');
var password_error=document.querySelector('#password_error input');
function checkTelephone() {
    var reMoilbe=/^1[3,5,8]\d{9}$/;
    if (telephone.value){
        if (reMoilbe.test(telephone.value)){
            telephone_error.innerText='';
            return true;
        }else{
            telephone_error.innerText='*用户名错误或者不存在';
            return false;
        }
    }else {
        telephone_error.innerText='*用户名不能为空';
        return false;
    }
}
function checkPassword() {

}
function checkVerification() {

}
telephone.onchange=function () {
    checkTelephone()
};