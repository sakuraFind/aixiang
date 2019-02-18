from aixiang.app.dao import video_dao
import json

def releaseVideo(user):
    res_user = video_dao.insertVideo(user)

    if res_user == -1:
        return json.dumps({"status_code": "40004", "status_text": "系统错误"})
    else:
        return json.dumps({"status_code": "1002", "status_text": "发布成功"})

# if __name__ == '__main__':
#     user={"video_url":"gdg","title":"fdbfe","represent":"dfdde","pag":"pfde","cover_url":"dfd","uuser_id":1}
#     print(releaseVideo(user))