from dosql import *
import cgi
import json

def index(req, stud_id):
    stud_id = cgi.escape(stud_id)
    z = doSql()
    confirm1 = z.execqry("select * from get_object_perstud_id('" + stud_id + "');", False)
    result = []
    for con in confirm1:
        stringed = map(str, con)
        result.append(stringed)

    return json.dumps(result)
    
