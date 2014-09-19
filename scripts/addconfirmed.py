from dosql import *
import cgi
import json
def index(req, stud_id, status):
    stud_id =  cgi.escape(stud_id)
    status = cgi.escape(stud_id)
    x = doSql()

    studs = x.execqry("select * from setconfirm('" + stud_id + "', '" + status + "');", True)
    result = []

    for stud in studs:
        stringed = map(str, stud)
        result.append(stringed)

    return json.dumps(result)
