from . import POOL
import pymysql
from aixiang.app.dao.sql.sql_edit import sql_edit

# 修改基本信息

def updateMessage(user_info):
        try:
            update_rows = None
            user_info_id=getByUserId(user_info['telephone'])['id']
            client=POOL.connection()
            cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
            # 4. 准备sql语句
            # sql = 'insert into user(telephone,password,regist_date) ' \
            #       'values("{telephone}","{password}",CURDATE())'. \
            #     format(telephone=user['telephone'], password=user['password'])

            sql=sql_edit.get('update_edit').format(city=user_info['city'], province=user_info['province'],nickname=user_info['nickname'],sex=user_info['sex'],birth_data=user_info['birth_data'],title=user_info['title'],user_info_id=user_info_id)
            # 5. 通过游标进行操作,execute()执行sql语句,这时结果为：1.如果插入成功返回受影响的行数 2. 如果插入失败返回None
            update_rows=cursor.execute(sql)
            client.commit()
        except Exception as ex:
            client.rollback()
        finally:
            return update_rows



# 修改邮箱


def updateEmail(user_email):
    pass

# 获取用户ID


def getByUserId(id):
    client = POOL.connection()
    try:
        res_user=None
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
        sql='select id from user where telephone={telephone} limit 1'.format(telephone=id)
        cursor.execute(sql)
        res_user = cursor.fetchone()
        client.commit()
    except Exception as ex:
        client.rollback()
    finally:
        return res_user

