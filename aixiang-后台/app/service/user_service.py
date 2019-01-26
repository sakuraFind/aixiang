import aixiang.app.dao.user_dao as userDao
import json

def addUser(user):
    if user.get('telephone') and user.get('password'):
        rr = userDao.addUser(user)
        if (rr):
            if (rr == -1):
                return json.dumps({"status_code": "10002", "status_text": "用户已经存在"})
            else:
                return json.dumps({"status_code": "10001", "status_text": "注册成功"})
        else:
            return json.dumps({"status_code": "40004", "status_text": "系统错误"})
    else:
        return json.dumps({"status_code": "40005", "status_text": "数据格式不合法"})

def getUserById(id):
    rr = userDao.getUserById(id)
    print(rr)

def updateUser(user):
    pass
def deleteUserById(id):
    pass
def login(user):
    pass