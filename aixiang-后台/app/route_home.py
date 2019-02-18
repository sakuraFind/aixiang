from flask import Blueprint, request, make_response
from aixiang.app.service.home_service import *
from aixiang.app.utils.my_token import checkToken
import json

home = Blueprint('home', __name__)


@home.route('/home')
def homes():
    return '你好'


@home.route('/data', methods=['POST'])
def data():
    results = getData()
    response = make_response()
    response.data = json.dumps({"results": results})
    return response


@home.route('/celebrity', methods=['POST'])
def celebtity():
    resultss = getCelebtity()
    response = make_response()
    response.data = json.dumps({"results": resultss})
    return response


@home.route('/nav', methods=['GET'])
def nav():
    token = request.headers.get('token')
    tel=checkToken(token)
    print(tel)
    results=getNav(tel)
    response = make_response()
    response.data = json.dumps({"results": results})
    print(response.data)
    return response

@home.route('/center', methods=['GET'])
def center():
    if request.method == 'GET':
        token = request.headers.get('token')
        if token:
            tel = checkToken(token)
            if tel:
                return json.dumps({"status_code": "10008", "status_text": "验证成功"})
            else:
                return json.dumps({"status_code": "10006", "status_text": "登录过期"})
        else:
            return json.dumps({"status_code": "10007", "status_text": "未登录"})
