from . import POOL
import pymysql
from aixiang.app.dao.sql.user_sql import user_sql
from werkzeug.security import check_password_hash

def addUser(user):
    if not getUserById(user['telephone']):
        try:
            user_id=None
            client = POOL.connection()
            cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
            sql=user_sql.get('addUser').format(telephone=user['telephone'],password=user['password'],email=user['email'])
            s=cursor.execute(sql)
            user_id=s
            client.commit()
            client.close()
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
        sql = 'select telephone from user where telephone={telephone} limit 1'.format(telephone=id)
        cursor.execute(sql)
        res_user = cursor.fetchone()
        client.commit()
        client.close()
    except Exception as ex:
        client.rollback()
    finally:
        return res_user

def checkUser(user):
    if getUserById(user['telephone']):
        try:
            client = POOL.connection()
            cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
            sql = user_sql.get('checkUser').format(telephone=user['telephone'])
            cursor.execute(sql)
            pwd = cursor.fetchone()
            ooo=check_password_hash(pwd['password'],user['password'])
            if ooo:
                ooo=10003
            else:
                ooo=10005
            client.close()
        except Exception as ex:
            client.rollback()
        finally:
            return ooo
    else:
        return -2