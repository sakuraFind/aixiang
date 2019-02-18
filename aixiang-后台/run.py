from aixiang.app.app import app
from aixiang.app.route import *
from aixiang.app.config import *
if __name__ =='__main__':
    app.run(host=HOST, port=PORT, debug=DEBUG)