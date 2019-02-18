from aixiang.app.dao import edit_dao
import json

def getUserById(user):
    res_user=edit_dao.getByUserId(user)

    if res_user==0 & res_user==1:
        return json.dumps({"status_code":"10002","status_text":"保存成功"})
    else:
        return json.dumps({"status_code":"40004","status_text":"系统错误"})




if __name__ == '__main__':
    user={"telephone":"1381323345","password":"123456"}
    print(getUserById(user['telephone']))