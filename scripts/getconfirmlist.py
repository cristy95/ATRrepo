from dosql import *
import cgi
import json

def index(req, status):
    status = sgi.escape(status)
    y = doSql()
    confirm1 = y.execqry("select * from getconfirmed('"+ status + "');", False)
    result1 = []
    for cons in confirm1:
        stringed = map(str, cons)
        result1.append(stringed)

    return json.dumps(result1)