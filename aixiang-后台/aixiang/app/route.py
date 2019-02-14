from aixiang.app.app import app
from aixiang.app.route_user import user

app.register_blueprint(user,url_prefix='/api/user')
@app.route('/api/home')
def index():
    pass
@app.errorhandler(404)
def miss(e):
    return '该页面丢失', 404
@app.errorhandler(500)
def error(e):
    return '服务器维护中.....', 500
