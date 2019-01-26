/**
 *Creat by 惠普 on 2019/1/22.
 */
(function () {
    var login = document.querySelector('.login');
    var rigist = document.querySelector('.rigist');
    var middle_login = document.querySelector('.middle_login');
    var middle_rigist = document.querySelector('.middle_rigist');
    login.onclick = function () {
        if (login.classList.contains('checked')) {

        } else {
            this.classList.add('checked');
            this.nextElementSibling.nextElementSibling.classList.remove('checked');
            middle_login.classList.remove('notshow');
            middle_rigist.classList.add('notshow')
        }

    };
    rigist.onclick = function () {
        if (rigist.classList.contains('checked')) {

        } else {
            this.classList.add('checked');
            this.previousElementSibling.previousElementSibling.classList.remove('checked');
            middle_login.classList.add('notshow');
            middle_rigist.classList.remove('notshow')
        }

    }


})();
var telephone = document.querySelector('#telephone');
var telephone_error = document.querySelector('#tel_error');
var password = document.querySelector('.password input');
var password_error = document.querySelector('#password_error input');
var verifyCode = new GVerify("v_container");
var Verification = document.querySelector('#Verification');   //输入验证码的地方
var Verification_error = document.querySelector('#Verification_check');

function checkTelephone() {
    var reMoilbe = /^1[3,5,8]\d{9}$/;
    if (telephone.value) {
        if (reMoilbe.test(telephone.value)) {
            telephone_error.value = '';
            return true;

        } else {
            telephone_error.value = '*手机号码格式不正确';
            return false;
        }
    } else {
        telephone_error.value = '*用户名不能为空';
        return false;
    }
}

function checkPassword() {
    var regMoile = /^\w{6,16}$/;
    if (password.value) {
        if (regMoile.test(password.value)) {
            password_error.value = '';
            return true;
        } else {
            password_error.value = '*密码长度必须在6-16位';
            return false;
        }
    } else {
        password_error.value = '*密码不能为空';
        return false;
    }

}

function checkVerification() {
    var ress = verifyCode.validate(Verification.value);
    if (Verification.value) {
        if (ress) {
            Verification_error.value = '';
            return true;
        } else {
            Verification_error.value = '*验证码错误';
            return false;
        }
    } else {
        Verification_error.value = '*验证码不能为空';
        return false;
    }
}

telephone.onchange = function () {
    checkTelephone();
};
password.onchange = function () {
    checkPassword()
};
Verification.onchange = function () {
    checkVerification()
};
document.querySelector('#login_button').onclick=function () {
    if (checkTelephone()&&checkPassword()&&checkVerification()){
        var user={'telephone':telephone.value,'password':password.value};
        postData('http://192.168.2.31:8080/api/user/login',user,function (res) {
            if (res&&res.status_code=='10001'){
                alert(res.status_text);
            }else {
                alert(res.status_text);
            }
        })
    }
};
