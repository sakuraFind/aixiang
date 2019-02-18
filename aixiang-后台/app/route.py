from aixiang.app.app import app
from aixiang.app.route_user import user
from aixiang.app.route_home import home
from aixiang.app.route_life_artist import life_artist
from aixiang.app.route_edit import edit, request
from aixiang.app.route_search import search

# 构建蓝图
app.register_blueprint(user, url_prefix='/api/user')
app.register_blueprint(home, url_prefix='/api/home')
app.register_blueprint(life_artist, url_prefix='/api/life_artist')
app.register_blueprint(edit, url_prefix='/api/edit')
app.register_blueprint(search, url_prefix='/api/search')


@app.route('/api')
def index():
    return 'home'


@app.errorhandler(404)
def miss(e):
    return '该页面丢失', 404


@app.errorhandler(500)
def error(e):
    return '服务器维护中.....', 500
