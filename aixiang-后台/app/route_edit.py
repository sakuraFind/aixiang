from flask import Blueprint,request

edit = Blueprint('edit',__name__)
# restful api

# 写文章
@edit.route('/index')
def index():
    pass

#已发布文章
@edit.route('/massage')
def massage():
    pass

# 素材库
@edit.route('/updatepw')
def updatepw():
    pass