from . import POOL
import pymysql
from aixiang.app.dao.sql.home_sql import home_sql


def getData():
    try:
        client = POOL.connection()
        skin_products = None
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
        sql = home_sql.get('load')
        cursor.execute(sql)
        skin_products = cursor.fetchall()
        client.commit()
        client.close()
    except Exception as ex:
        print(ex)
        client.rollback()
    finally:
        return skin_products


def getCelebtity():
    try:
        client = POOL.connection()
        skin_productss = None
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
        sql = home_sql.get('celebrity_load')
        cursor.execute(sql)
        skin_productss = cursor.fetchall()
        client.commit()
        client.close()
    except Exception as ex:
        print(ex)
        client.rollback()
    finally:
        return skin_productss


def getNav(tel):
    try:
        id=getIdbytel(tel)
        client = POOL.connection()
        skin_productss = None
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
        sql = home_sql.get('nav').format(users_id=id['id'])
        cursor.execute(sql)
        skin_productss = cursor.fetchall()
        client.commit()
        client.close()
    except Exception as ex:
        print(ex)
        client.rollback()
    finally:
        return skin_productss

def getIdbytel(tel):
    try:
        client = POOL.connection()
        skin_productss = None
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
        sql = home_sql.get('getid').format(telephone=tel)
        cursor.execute(sql)
        skin_productss = cursor.fetchone()
        client.commit()
        client.close()
    except Exception as ex:
        print(ex)
        client.rollback()
    finally:
        return skin_productss