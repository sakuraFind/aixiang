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
var telephone = document.querySelector('#regist_telephone');
var telephone_error = document.querySelector('#tel_regist_error');
var password = document.querySelector('#regist_password');
var password_error = document.querySelector('#pass_regist_error');
var verifyCode = new GVerify("v_container");
var passwordtwo = document.querySelector('#regist_passwordtwo');
var passwordtwo_error = document.querySelector('#passtwo_regist_error');
var email = document.querySelector('#email');
var email_error = document.querySelector('#email_error');
//注册部分
//登录部分
var telephone_login = document.querySelector('#telephone');
var telephone_login_error = document.querySelector('#tel_error');
var password_login = document.querySelector('#password');
var password_login_error = document.querySelector('#password_error');
var Verification = document.querySelector('#Verification');   //输入验证码的地方
var Verification_error = document.querySelector('#Verification_check');

//注册验证
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

function checkPasswordTwo() {
    var regMoile = /^\w{6,16}$/;
    if (passwordtwo.value) {
        if (regMoile.test(passwordtwo.value)) {
            if (password.value == passwordtwo.value) {
                passwordtwo_error.value = '';
            }
            else {
                passwordtwo_error.value = '两次密码不相同';
            }
            return true;
        } else {
            passwordtwo_error.value = '*密码长度必须在6-16位';
            return false;
        }
    } else {
        passwordtwo_error.value = '*密码不能为空';
        return false;
    }
}

function checkemail() {
    var regMoile = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (email.value) {
        if (regMoile.test(email.value)) {
            email_error.value = '';
            return true;
        } else {
            email_error.value = '*邮箱格式不正确';
            return false;
        }
    } else {
        email_error.value = '*密码不能为空';
        return false;
    }
}

telephone.onchange = function () {
    checkTelephone();
};
password.onchange = function () {
    checkPassword();
    if (passwordtwo.value) {
        checkPasswordTwo()
    }
};
passwordtwo.onchange = function () {
    checkPasswordTwo()
};
email.onchange = function () {
    checkemail()
};

//登录验证
function checkloginTelephone() {
    var reMoilbe = /^1[3,5,8]\d{9}$/;
    if (telephone_login.value) {
        if (reMoilbe.test(telephone_login.value)) {
            telephone_login_error.value = '';
            return true;

        } else {
            telephone_login_error.value = '*手机号码格式不正确';
            return false;
        }
    } else {
        telephone_login_error.value = '*用户名不能为空';
        return false;
    }
}

function checkloginPassword() {
    var regMoile = /^\w{6,16}$/;
    if (password_login.value) {
        if (regMoile.test(password_login.value)) {
            password_login_error.value = '';
            return true;
        } else {
            password_login_error.value = '*密码长度必须在6-16位';
            return false;
        }
    } else {
        password_login_error.value = '*密码不能为空';
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

telephone_login.onchange = function () {
    checkloginTelephone();
};
password_login.onchange = function () {
    checkloginPassword()
};
Verification.onchange = function () {
    checkVerification()
};

//注册按钮
document.querySelector('#regist_button').onclick = function () {
    if (checkTelephone() && checkPassword() && checkPasswordTwo() && checkemail()) {
        var user = {'telephone': telephone.value, 'password': password.value, 'email': email.value};
        postData('http://192.168.2.31:8080/api/user/regist', user, function (res) {
            if (res && res.status_code == '10001') {
                alert(res.status_text);
                localStorage.setItem('token',res.token);
                if (sessionStorage.getItem('from')) {
                    location.href=sessionStorage.getItem('from')
                }else {
                    location.href='../html/home.html'
                }
            } else {
                alert(res.status_text);
            }
        })
    }
};
//登录按钮
document.querySelector('#login_button').onclick = function () {
    if (checkloginTelephone() && checkloginPassword() && checkVerification()) {
        var user = {'telephone': telephone_login.value, 'password': password_login.value};
        postData('http://192.168.2.31:8080/api/user/login', user, function (res) {
            if (res && res.status_code == '10003') {
                alert(res.status_text);
                localStorage.setItem('token',res.token);
                if (sessionStorage.getItem('from')) {
                    location.href=sessionStorage.getItem('from')
                }else {
                    location.href='../html/home.html'
                }

            } else if(res && res.status_code == '10004'){
                alert(res.status_text);
            }else {
                alert(res.status_text);
            }
        })
    }
};




