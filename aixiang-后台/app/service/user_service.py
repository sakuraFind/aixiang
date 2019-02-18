import aixiang.app.dao.user_dao as userDao
import json
from werkzeug.security import generate_password_hash
from flask import make_response
from aixiang.app.utils.my_token import createToken

def addUser(user):
    if user.get('telephone') and user.get('password') and user.get('email'):
        pf=generate_password_hash(user['password'],method='pbkdf2:sha1:1001',salt_length=8)
        user['password']=pf
        rr = userDao.addUser(user)
        # print(rr)
        if (rr):
            if (rr == -1):
                return json.dumps({"status_code": "10002", "status_text": "用户已经存在"})
            else:
                token = createToken(user['telephone'])
                response = make_response()
                response.data = json.dumps({"status_code": "10001", "status_text": "注册成功", "token": token})
                return response
        else:
            return json.dumps({"status_code": "40004", "status_text": "系统错误"})
    else:
        return json.dumps({"status_code": "40005", "status_text": "数据格式不合法"})

def getUserById(user):
    if user.get('telephone') and user.get('password'):
        rr = userDao.checkUser(user)
        print(rr)
        if (rr):
            if (rr == -2):
                return json.dumps({"status_code": "10004", "status_text": "用户名不存在"})
            elif(rr==10003):
                token=createToken(user['telephone'])
                response=make_response()
                response.data=json.dumps({"status_code": "10003", "status_text": "登录成功","token":token})
                return response
            else:
                return json.dumps({"status_code": "10005", "status_text": "密码错误"})
        else:
            return json.dumps({"status_code": "40004", "status_text": "系统错误"})
    else:
        return json.dumps({"status_code": "40005", "status_text": "数据格式不合法"})

def updateUser(user):
    pass
def deleteUserById(id):
    pass
def login(user):
    pass