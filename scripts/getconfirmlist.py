from dosql import *
import cgi
import simplejson as json

def index(req, status):
    status = cgi.escape(status)
    y = doSql()
    confirm1 = y.execqry("select * from getconfirmed('"+ status + "');", False)

    result1 = []

    for cons in confirm1:
        stringed = map(str, cons)
        result1.append(stringed)

    return json.dumps(result1)
