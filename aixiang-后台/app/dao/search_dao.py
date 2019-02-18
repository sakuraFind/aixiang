from . import POOL
import pymysql
from aixiang.app.dao.sql.sql_search import sql_search

# 查找图片栏
def selectMessage(user):
    try:
        res_user = -1
        # print(1)
        client = POOL.connection()
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)

        # 4. 准备sql语句
        # sql = 'insert into user(telephone,password,regist_date) ' \
        #       'values("{telephone}","{password}",CURDATE())'. \
        #     format(telephone=user['telephone'], password=user['password'])

        sql = sql_search.get('select_caption').format(name=user['name'])
        print(sql)
        # 5. 通过游标进行操作,execute()执行sql语句,这时结果为：1.如果插入成功返回受影响的行数 2. 如果插入失败返回None
        update_rows = cursor.execute(sql)
        client.commit()
        res_user=cursor.fetchall()
        print(res_user)
    except Exception as ex:
        client.rollback()
    finally:
        return res_user


# 查找专辑
def selectAlbum(user):
    try:
        res_user = -1
        # print(1)
        client = POOL.connection()
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)

        # 4. 准备sql语句
        # sql = 'insert into user(telephone,password,regist_date) ' \
        #       'values("{telephone}","{password}",CURDATE())'. \
        #     format(telephone=user['telephone'], password=user['password'])

        sql = sql_search.get('select_album').format(name1=user['name'],name2=user['name'])
        print(sql)
        # 5. 通过游标进行操作,execute()执行sql语句,这时结果为：1.如果插入成功返回受影响的行数 2. 如果插入失败返回None
        update_rows = cursor.execute(sql)
        client.commit()
        res_user=cursor.fetchall()
        print(res_user)
    except Exception as ex:
        client.rollback()
    finally:
        return res_user

# 文章栏
def selectArticle(user):
    try:
        res_user = -1
        # print(1)
        client = POOL.connection()
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)

        # 4. 准备sql语句
        # sql = 'insert into user(telephone,password,regist_date) ' \
        #       'values("{telephone}","{password}",CURDATE())'. \
        #     format(telephone=user['telephone'], password=user['password'])

        sql = sql_search.get('select_article').format(name3=user['name'])
        print(sql)
        # 5. 通过游标进行操作,execute()执行sql语句,这时结果为：1.如果插入成功返回受影响的行数 2. 如果插入失败返回None
        update_rows = cursor.execute(sql)
        client.commit()
        res_user=cursor.fetchall()
        print(res_user)
    except Exception as ex:
        client.rollback()
    finally:
        return res_user

# 达人栏
def selectSuperman(user):
    try:
        res_user = -1
        # print(1)
        client = POOL.connection()
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)

        # 4. 准备sql语句
        # sql = 'insert into user(telephone,password,regist_date) ' \
        #       'values("{telephone}","{password}",CURDATE())'. \
        #     format(telephone=user['telephone'], password=user['password'])

        sql = sql_search.get('select_superman').format(name4=user['name'],name5=user['name'])
        print(sql)
        # 5. 通过游标进行操作,execute()执行sql语句,这时结果为：1.如果插入成功返回受影响的行数 2. 如果插入失败返回None
        update_rows = cursor.execute(sql)
        client.commit()
        res_user=cursor.fetchall()
        print(res_user)
    except Exception as ex:
        client.rollback()
    finally:
        return res_user