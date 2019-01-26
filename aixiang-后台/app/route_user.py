from flask import Blueprint,request
from aixiang.app.service.user_service import *
import json
user = Blueprint('user',__name__)
@user.route('/users')
def users():
    return '你好'

@user.route('/login',methods=['POST','GET','PUT','DELETE'])
def person():
    if request.method=='GET':
        return '获取用户信息'
    elif request.method=='POST':
        if request.is_json and request.get_json():
            u=request.get_json()
            result=addUser(u)
            return result
        else:
            return json.dumps({"status_code":"40005","status_text":"数据格式不合法"})
    elif request.method=='PUT':
        return '修改用户'
    elif request.method=='DELETE':
        return '删除用户'
@user.route('/login',methods=['POST'])
def login():
    return 'user_show'
