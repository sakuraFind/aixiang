from flask import Blueprint,request
from aixiang.app.service.video_service import *
import json

life_artist = Blueprint('life_artist',__name__)
# restful api

# 写文章
@life_artist.route('/index')
def index():
    pass

#已发布文章
@life_artist.route('/published/')
def published():
    pass

# 素材库
@life_artist.route('/videolib/')
def videolib():
    pass
@life_artist.route('/releasevideo/',methods=['POST'])
def releasevideo():
    if request.is_json and request.get_json():
        user = request.get_json()
        print(user)
        result = releaseVideo(user)
        return result
    else:
        return json.dumps({"status_code": "40005", "status_text": "数据格式不合法"})

