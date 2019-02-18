import aixiang.app.dao.home_dao as homeDao
import json

def getData():
    rr=homeDao.getData()
    return rr
def getCelebtity():
    vv=homeDao.getCelebtity()
    return vv
def getNav(tel):
    vv=homeDao.getNav(tel)
    return vv

if __name__ == '__main__':
    r=getNav('15240060240')
    print(r)