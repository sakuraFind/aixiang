from . import POOL
import pymysql
from aixiang.app.dao.sql.sql_video import sql_video

def insertVideo(user):
    try:
        res_user = -1
        # print(1)
        client = POOL.connection()
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)

        # 4. 准备sql语句
        # sql = 'insert into user(telephone,password,regist_date) ' \
        #       'values("{telephone}","{password}",CURDATE())'. \
        #     format(telephone=user['telephone'], password=user['password'])

        sql = sql_video.get('insert_video').format(uuser_id=user['uuser_id'],title=user['title'],cover_url=user['cover_url'],represent=user['represent'],pag=user['pag'],video_url=user['video_url'])
        print(sql)
        # 5. 通过游标进行操作,execute()执行sql语句,这时结果为：1.如果插入成功返回受影响的行数 2. 如果插入失败返回None
        res_user = cursor.execute(sql)
        client.commit()
        # res_user=cursor.fetchall()
        print(res_user)
    except Exception as ex:
        client.rollback()
    finally:
        return res_user