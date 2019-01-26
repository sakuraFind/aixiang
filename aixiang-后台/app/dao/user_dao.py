from . import POOL
import pymysql
from aixiang.app.dao.user_sql import user_sql


def addUser(user):
    if not getUserById(user['telephone']):
        try:
            user_id=None
            client = POOL.connection()
            cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
            sql=user_sql.get('addUser').format(telephone=user['telephone'],password=user['password'])
            cursor.execute(sql)
            user_id=client.insert_id()
            print(user_id)
            client.commit()
        except Exception as ex:
            client.rollback()
        finally:
            return user_id
    else:
        return -1


def getUserById(id):
    try:
        res_user = None
        client = POOL.connection()
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
        sql = 'select telephone from user where telphone={telephone} limit 1'.format(telephone=id)
        cursor.execute(sql)
        res_user = cursor.fetchone()
        print(res_user)
        client.commit()
    except Exception as ex:
        client.rollback()
    finally:
        return res_user
