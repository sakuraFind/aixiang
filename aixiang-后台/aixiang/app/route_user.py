from flask import Blueprint, request
from aixiang.app.service.user_service import *
import json

user = Blueprint('user', __name__)


@user.route('/users')
def users():
    return '你好'


@user.route('/regist', methods=['POST'])
def regist():
    if request.method == 'POST':
        if request.is_json and request.get_json():
            u = request.get_json()
            result = addUser(u)
            # print(result)
            return result
        else:
            return json.dumps({"status_code": "40005", "status_text": "数据格式不合法"})


@user.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        if request.is_json and request.get_json():
            u = request.get_json()
            result = getUserById(u)
            # print(result)
            return result
        else:
            return json.dumps({"status_code": "40005", "status_text": "数据格式不合法"})
