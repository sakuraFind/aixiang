from flask import Blueprint,request
from aixiang.app.utils.my_token import checkToken

home=Blueprint('resume',__name__)
import json
@home.route('/')
def index():
    return 'hello'

@home.route('/center')
def center():
    if request.method=='GET':
        token=request.headers.get('token')
        print(token)
        if token:
            tel=checkToken(token)
            if tel:
                return json.dumps('跳转页面')
            else:
                return json.dumps({"status_code":"10006","status_text":"登录过期"})
        else:
            return json.dumps({"status_code":"10007","status_text":"未登录"})