from dosql import *
import cgi
import simplejson as json

def index(req, stud_id):
    stud_id = cgi.escape(stud_id)
    z = doSql()
    confirm = z.execqry("select * from get_status_perid('" + stud_id + "');", False)

    result = []
    for con in confirm:
        stringed = map(str, con)
        result.append(stringed)

    return json.dumps(result)
    
