from flask import Blueprint,request
from aixiang.app.service.search_service import *
import json

search = Blueprint('search',__name__)
# restful api

# 写文章
@search.route('/picture/',methods=['POST'])
def index():
    if request.is_json and request.get_json():
        user = request.get_json()
        print(user)
        result = getImgshow(user)
        print(result)
        return result
    else:
        return json.dumps({"status_code": "40005", "status_text": "数据格式不合法"})
@search.route('/album/',methods=['POST'])
def album():
    if request.is_json and request.get_json():
        user = request.get_json()
        print(user)
        result = getAlbumshow(user)
        print(result)
        return result
    else:
        return json.dumps({"status_code": "40005", "status_text": "数据格式不合法"})
@search.route('/article/',methods=['POST'])
def article():
    if request.is_json and request.get_json():
        user = request.get_json()
        print(user)
        result = getArticleshow(user)
        print(result)
        return result
    else:
        return json.dumps({"status_code": "40005", "status_text": "数据格式不合法"})
@search.route('/superman/',methods=['POST'])
def superman():
    if request.is_json and request.get_json():
        user = request.get_json()
        print(user)
        result = getSupermanshow(user)
        print(result)
        return result
    else:
        return json.dumps({"status_code": "40005", "status_text": "数据格式不合法"})
