from dosql import *
import cgi
import json

def index(req, status):
    status = cgi.escape(status)
    y = doSql()
    confirm1 = y.execqry("select * from getconfirm('"+ status + "');", False)

    result1 = []

    for cons in confirm1:
        stringed = map(str, cons)
        result1.append(stringed)

    return json.dumps(result1)
