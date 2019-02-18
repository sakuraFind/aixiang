from aixiang.app.dao import search_dao
import json

# 图片栏
def getImgshow(user):
    res_user = search_dao.selectMessage(user)

    if res_user==-1:
        return json.dumps({"status_code":"40004","status_text":"系统错误"})
    elif res_user==():
        return json.dumps({"status_code":"1002","status_text":"暂时没有内容,抱歉,亲!"})
    else:
        return json.dumps(res_user)


# 专辑栏
def getAlbumshow(user):
    res_user=search_dao.selectAlbum(user)

    if res_user==-1:
        return json.dumps({"status_code":"40004","status_text":"系统错误"})
    elif res_user==():
        return json.dumps({"status_code":"1002","status_text":"暂时没有内容,抱歉,亲!"})
    else:
        return json.dumps(res_user)

# 文章栏
def getArticleshow(user):
    res_user=search_dao.selectArticle(user)

    if res_user==-1:
        return json.dumps({"status_code":"40004","status_text":"系统错误"})
    elif res_user==():
        return json.dumps({"status_code":"1002","status_text":"暂时没有内容,抱歉,亲!"})
    else:
        return json.dumps(res_user)

# 达人栏
def getSupermanshow(user):
    res_user=search_dao.selectSuperman(user)

    if res_user==-1:
        return json.dumps({"status_code":"40004","status_text":"系统错误"})
    elif res_user==():
        return json.dumps({"status_code":"1002","status_text":"暂时没有内容,抱歉,亲!"})
    else:
        return json.dumps(res_user)

# if __name__ == '__main__':
#     user={'name':'%哈哈哈%'}
# print(getImgshow(user))
